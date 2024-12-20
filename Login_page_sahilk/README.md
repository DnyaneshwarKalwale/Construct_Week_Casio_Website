# Login Page

This is a responsive and interactive login page designed for user authentication. The page includes social login options, OTP-based login, and email-password login, along with basic form validation.

---

## Features

### 1. **Social Login**
- **Facebook Sign-In Button:** Allows users to sign in with their Facebook account.
- **Google Sign-In Button:** Enables signing in with a Google account.

### 2. **OTP Login**
- A button to log in using an OTP, ideal for quick authentication without passwords.

### 3. **Email and Password Login**
- Users can enter their email/mobile number and password to log in.
- Includes placeholders and labels for a better user experience.

### 4. **Form Validation**
- Ensures:
  - Email input is in a valid format.
  - Password is at least 8 characters long and contains a mix of letters and numbers.
- Displays error messages for invalid inputs.

### 5. **Forgot Password**
- A "Forgot Password" link is provided for users to reset their credentials.

### 6. **Sign-Up Option**
- Provides an option to create a new account with a "Create an account" link.

---

## File Structure

### 1. **HTML File**
- `login.html`: Contains the structure of the login page.

### 2. **CSS File**
- `login.css`: Provides styling for the login page elements. Ensure the file is included in the same directory as `login.html`.

### 3. **JavaScript**
- Inline script within `login.html` handles form validation and simulated login logic.

---

## Form Validation Logic

### Email Validation
- Validates email input using a regular expression to ensure proper formatting.

### Password Validation
- Ensures the password:
  - Has a minimum of 8 characters.
  - Contains at least one letter and one number.

### Credential Check
- Compares user input with a predefined valid email and password for demonstration purposes:
  - **Email:** `test@example.com`
  - **Password:** `password123`

---

## How to Use

1. Open `login.html` in a browser.
2. Use the provided form to log in:
   - **Social Login:** Click on the respective button for Facebook or Google.
   - **OTP Login:** Use the "Login via OTP" button.
   - **Email and Password Login:**
     - Enter a valid email or mobile number and password.
     - Click the "Login" button.
3. For invalid credentials, appropriate error messages are displayed.

---

## Customization

### Social Login Buttons
- Update the button labels and styles in the `.btn-facebook` and `.btn-google` classes in the `login.css` file.

### Form Validation
- Modify validation logic in the inline JavaScript to adapt to your requirements.

### Logo
- Replace the logo image URL in the `src` attribute of the `<img>` tag with your desired logo URL.

---

## Dependencies
- No external libraries or frameworks are used. All scripts are in vanilla JavaScript.

---

## Future Improvements
1. **Backend Integration:** Replace the simulated login with a real authentication backend.
2. **Enhanced Security:** Use secure methods like hashing for passwords.
3. **Accessibility:** Ensure the page meets accessibility standards (e.g., ARIA roles).

---

## Credits
- Logo used is for illustrative purposes.
- Basic validation script inspired by common patterns in JavaScript.
