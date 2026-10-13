<?php
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$fullName = htmlspecialchars(trim($data['fullName'] ?? ''));
$phoneNumber = htmlspecialchars(trim($data['phoneNumber'] ?? ''));
$emailAddress = htmlspecialchars(trim($data['emailAddress'] ?? ''));
$enquiryType = htmlspecialchars(trim($data['enquiryType'] ?? 'General Enquiry'));
$message = htmlspecialchars(trim($data['message'] ?? ''));

if (empty($fullName) || empty($phoneNumber) || empty($message)) {
    http_response_code(422);
    echo json_encode(['error' => 'Please fill in all required fields.']);
    exit;
}

// Enforce letters only for full name
if (!preg_match('/^[a-zA-Z\s]+$/', $fullName)) {
    http_response_code(422);
    echo json_encode(['error' => 'Full Name can only contain letters.']);
    exit;
}

// Enforce digits only for phone number
if (!preg_match('/^\d+$/', $phoneNumber) || strlen($phoneNumber) < 7) {
    http_response_code(422);
    echo json_encode(['error' => 'Phone Number can only contain numbers (min 7 digits).']);
    exit;
}

// Enforce email with @ and . if provided
if (!empty($emailAddress)) {
    if (strpos($emailAddress, '@') === false || strpos($emailAddress, '.') === false || !filter_var($emailAddress, FILTER_VALIDATE_EMAIL)) {
        http_response_code(422);
        echo json_encode(['error' => 'Email must contain @ and a valid domain.']);
        exit;
    }
}

// Enforce message length up to 50 characters
if (mb_strlen($message) > 50) {
    http_response_code(422);
    echo json_encode(['error' => 'Message cannot exceed 50 characters.']);
    exit;
}

// Load config if available
$configFile = __DIR__ . '/config.php';
if (file_exists($configFile)) {
    require_once $configFile;
}

$apiKey = defined('RESEND_API_KEY') ? RESEND_API_KEY : getenv('RESEND_API_KEY');
$toEmail = defined('CONTACT_EMAIL') ? CONTACT_EMAIL : (getenv('CONTACT_EMAIL') ?: 'sayyidnishasns200@gmail.com');

if (empty($apiKey)) {
    http_response_code(500);
    echo json_encode(['error' => 'Resend API key is not configured on the server.']);
    exit;
}

$emailHtml = '
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
    <div style="background: #071F17; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 24px;">
        <h2 style="color: #00D084; margin: 0; font-size: 20px;">New Property Enquiry</h2>
        <p style="color: #cbd5e1; margin: 6px 0 0; font-size: 13px;">Received via NearbyEstate Website</p>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569; width: 35%;">Full Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">' . $fullName . '</td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Phone Number:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;"><a href="tel:' . $phoneNumber . '" style="color: #0F382C; font-weight: bold;">' . $phoneNumber . '</a></td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Email Address:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">' . (!empty($emailAddress) ? '<a href="mailto:' . $emailAddress . '" style="color: #0F382C;">' . $emailAddress . '</a>' : '<span style="color: #94a3b8;">Not provided</span>') . '</td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Enquiry Type:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0F382C; font-weight: bold;"><span style="background: #e6f9f2; color: #0A543C; padding: 4px 10px; border-radius: 6px;">' . $enquiryType . '</span></td>
        </tr>
    </table>

    <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #00D084; margin-bottom: 24px;">
        <strong style="color: #334155; font-size: 13px; display: block; margin-bottom: 6px;">Message:</strong>
        <p style="color: #1e293b; margin: 0; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">' . nl2br($message) . '</p>
    </div>

    <div style="text-align: center; color: #94a3b8; font-size: 11px; padding-top: 16px; border-top: 1px solid #f1f5f9;">
        NearbyEstate Notification System • Direct Connection Platform
    </div>
</div>';

$payload = json_encode([
    'from' => 'NearbyEstate <onboarding@resend.dev>',
    'to' => [$toEmail],
    'subject' => 'New Enquiry: ' . $enquiryType . ' - ' . $fullName,
    'html' => $emailHtml
]);

$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code($httpCode ?: 500);
    echo $response ?: json_encode(['error' => 'Failed to send via Resend']);
}
