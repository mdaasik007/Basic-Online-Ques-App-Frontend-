# 🧠 Online Quiz App

Welcome to the **Online Quiz App** — a fun and interactive quiz platform built using **HTML**, **CSS**, and **JavaScript**! 🎯

This web app allows users to register, take quizzes, track progress, and see their scores instantly. It’s fully client-side and uses **LocalStorage** to store user data securely in the browser.

---

## 📋 Table of Contents

* [🚀 Introduction](#-introduction)
* [✨ Features](#-features)
* [🛠️ Technologies Used](#️-technologies-used)
* [📦 Installation](#-installation)
* [🧩 Usage](#-usage)
* [⚙️ How It Works](#️-how-it-works)
* [🐞 Common Errors & Fixes](#-common-errors--fixes)
* [💡 Future Enhancements](#-future-enhancements)
* [👩‍💻 Author](#-author)
* [📜 License](#-license)

---

## 🚀 Introduction

The **Online Quiz App** is a lightweight web-based quiz system that:

* Lets users **register** with their name, email, and password.
* Presents a series of **multiple-choice questions**.
* Tracks the user’s **progress and score** in real-time.
* Displays the final **results** (Pass/Fail).
* Allows users to **retake the quiz** or **log out**.

It’s perfect for small quizzes, learning games, or interview practice sessions!

---

## ✨ Features

✅ User registration with validation
✅ Email and password verification
✅ 15 engaging general knowledge questions
✅ Real-time progress bar
✅ Score calculation and pass/fail feedback
✅ Retake and logout options
✅ Fully responsive and mobile-friendly UI

---

## 🛠️ Technologies Used

| Technology                | Purpose                                |
| ------------------------- | -------------------------------------- |
| **HTML5**                 | Structure of the app                   |
| **CSS3**                  | Styling and responsiveness             |
| **JavaScript (ES6)**      | Logic, validation, and quiz flow       |
| **LocalStorage API**      | Save user info and scores persistently |
| **Google Fonts (Roboto)** | Clean typography                       |

---

## 📦 Installation

Follow these simple steps to get started 👇

1. **Clone this repository** or **download the ZIP**:

   ```bash
   git clone https://github.com/your-username/online-quiz-app.git
   ```

2. **Navigate to the project folder**:

   ```bash
   cd online-quiz-app
   ```

3. **Open `index.html`** in your favorite browser 🌐

   * You don’t need a server — it works locally!

---

## 🧩 Usage

1. 🧍 **Register** by entering your **name**, **email**, and **password**.
2. 🧠 Click **Submit** to start the quiz.
3. 📚 Answer each question and click **Next** to proceed.
4. 📊 Track your progress using the progress bar.
5. 🏁 Once done, view your **score** and whether you passed or failed.
6. 🔁 You can **Retake the Quiz** or **Logout** anytime.

---

## ⚙️ How It Works

Here’s a simple overview of how the app runs under the hood:

1. **Registration Form Validation**

   * Email and password are validated.
   * Data is stored in `localStorage`.

2. **Quiz Logic**

   * Each question is loaded dynamically from a question array.
   * User selections are recorded and checked against correct answers.

3. **Scoring System**

   * The score is tallied as the user progresses.
   * A user must answer at least **10 out of 15** questions to pass.

4. **Results Display**

   * Displays user name, total score, and pass/fail message.
   * Saves quiz history for each user in `localStorage`.

---

## 🐞 Common Errors & Fixes

| ❌ Issue                                    | ⚠️ Cause                                       | ✅ Fix                                                              |
| ------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------------------ |
| **“User with this email already exists.”** | Same email used for registration again         | Use a different email or clear LocalStorage                        |
| **Nothing happens after clicking Submit**  | Email format invalid or password too short     | Enter a valid email and use at least 6 characters for the password |
| **Progress bar not moving**                | JavaScript not loaded correctly                | Check the script path `<script src="app.js"></script>`             |
| **Quiz not starting**                      | Section not shown due to hidden class conflict | Ensure CSS `.hidden` class toggles correctly                       |
| **Score not updating**                     | Radio buttons not capturing input              | Verify question options are rendered with correct event listeners  |

💡 *Tip:* If anything seems broken, open the **browser console (F12 → Console tab)** to check for JavaScript errors.

---

## 💡 Future Enhancements

🚀 Add category-wise quizzes (e.g., Math, Science, History)
📊 Show user score history in a chart
🌙 Add Dark Mode
🌐 Save data using a backend (e.g., Firebase or Node.js)
📱 Improve mobile animations and transitions

---

## 👩‍💻 Author

**Developed by:** *[Your Name]* 👨‍💻

* 💌 Email: (mailto:aasikflipper@gmail.com)]
* 🌍 GitHub: (https://github.com/mdaasik007)
* 💼 LinkedIn: (https://www.linkedin.com/in/mohammed-aasik-a55b01318/)

---

## 📜 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

## 🎉 Thank You

Thanks for checking out **Online Quiz App**!
If you like this project, please ⭐ it on GitHub and share your feedback! 💬
