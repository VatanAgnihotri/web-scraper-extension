# Scrape This Page - Chrome Extension

A simple Chrome Extension that allows users to scrape the content of a webpage. This extension enables easy data extraction from web pages, with a modern and clean user interface for interaction.

## Features

- **Scrape Page Content**: Click the extension icon to scrape the entire HTML content of the current page.
- **User-Friendly Interface**: The popup has a modern design with clear actions and a loading indicator during the scraping process.
- **Dynamic Content Display**: View the HTML content directly in the popup after selecting the tag.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

Follow these steps to install and use the extension:

### 1. Download the Project

Clone this repository or download it as a ZIP file:

```bash
git clone https://github.com/your-username/scrape-this-page.git
```
### 2. Load the Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer mode** (toggle at the top-right).
3. Click on **Load unpacked**.
4. Select the folder where you downloaded/cloned this repository.
5. The extension should now be added to your Chrome browser.

## 3. Use the Extension

1. Click on the extension icon in your Chrome toolbar.
2. Press the **"Scrape Page"** button to scrape the content of the current page.

---

## Usage

After the extension is installed, here’s how you can interact with it:

### Scrape Page:

- When you click the extension icon, a popup will appear with a **Scrape Page** button.
- Press **Scrape Page** to capture the entire HTML content of the page you're currently viewing.


### View Results:

- The scraped content will be displayed below the filter options in the popup.

---

## How It Works

### 1. Scraping the Page

- When the user clicks the **Scrape Page** button, the extension sends a message to the background script, which scrapes the current page's HTML using `document.documentElement.innerHTML`.
- The content is saved in Chrome’s `chrome.storage.local`.


### 2. User Interface

- The popup includes a **Scrape Page** button.

---

## Technologies Used

- **HTML**: For structuring the popup UI.
- **CSS**: For styling the popup and making it visually appealing.
- **JavaScript (Chrome Extension API)**: For functionality, including scraping content and filtering tags.
- **Chrome Storage API**: To store the scraped page content locally.

---

## Contributing

Contributions are welcome! If you have suggestions for improvements or bug fixes, feel free to:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

Please ensure that any changes are well-documented and tested.

---

