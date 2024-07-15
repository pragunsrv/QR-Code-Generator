# Advanced QR Code Generator

## Overview

The Advanced QR Code Generator is a web application that allows users to create and customize QR codes with various options, including different types, sizes, and colors. It features a polished and professional UI/UX with advanced visual enhancements, responsiveness, and local storage support for saving and displaying QR code history.

## Features

- **Generate QR Codes**: Create QR codes from text, URLs, emails, or phone numbers.
- **Customization**: Adjust size and color of the QR codes.
- **Download QR Codes**: Save generated QR codes as images.
- **History**: View and manage previously generated QR codes with local storage support.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the page and providing a responsive and modern look.
- **JavaScript**: For QR code generation and interactive features.
- **QRCode.js**: A JavaScript library used for generating QR codes.

## File Structure

```
/project-directory
│
├── index.html
├── styles.css
└── script.js
```

### index.html

The main HTML file that contains the structure of the QR Code Generator application. It includes a form for user input, a section to display the QR code, and a history section to show previously generated QR codes.

### styles.css

The CSS file responsible for styling the application, providing a modern and responsive layout, and including visual enhancements like hover effects and animations.

### script.js

The JavaScript file that handles form submission, QR code generation, history management, and local storage operations.

## Installation

1. Clone the repository or download the project files.
2. Open `index.html` in your web browser.

## Usage

1. **Enter Text**: Type the text you want to convert into a QR code in the input field.
2. **Select Type**: Choose the type of QR code (Text, URL, Email, Phone) from the dropdown menu.
3. **Customize**: Set the size and color of the QR code as desired.
4. **Generate QR Code**: Click the "Generate QR Code" button to create the QR code.
5. **Download**: Use the "Download QR Code" button to save the QR code image.
6. **View History**: The generated QR codes will be saved and displayed in the history section.

## Local Storage

The application uses local storage to save the history of generated QR codes. This allows the QR codes to persist even after the page is refreshed or closed.

## Contributing

Contributions to the project are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
