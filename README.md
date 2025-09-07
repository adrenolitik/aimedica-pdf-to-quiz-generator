# 🏥 AI Medica Lab - Medical Test Generator

**AI Medica Lab** предоставляет интеллектуальный генератор медицинских тестов из PDF-документов. Приложение использует искусственный интеллект Google Gemini для создания 20 медицинских вопросов на основе загруженных медицинских документов.

🌐 **Живое демо**: https://aimedica-pdf-to-quiz-generator-9z6b-1e94h7red.vercel.app/

## ✨ Возможности

- 📄 Загрузка медицинских PDF-файлов (до 5MB)
- 🤖 Генерация 20 медицинских вопросов с помощью ИИ
- 🎯 Фокус на медицинской терминологии и концепциях
- 📱 Адаптивный интерфейс для всех устройств
- ⚡ Быстрая генерация с прогресс-баром
- 📊 Интерактивное тестирование с результатами

## 🚀 Автоматическое развертывание

### Deploy on Vercel (Рекомендуется)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fadrenolitik%2Faimedica-pdf-to-quiz-generator&env=GOOGLE_API_KEY&envDescription=Google%20API%20key%20for%20Gemini%20AI&envLink=https://aistudio.google.com/app/apikey)

### Настройка GitHub для автоматического деплоя:

1. **Fork** этот репозиторий
2. Перейдите в **Settings** → **Secrets and variables** → **Actions**
3. Добавьте следующие секреты:
   ```
   GOOGLE_API_KEY=your_google_api_key
   VERCEL_TOKEN=your_vercel_token
   ORG_ID=your_vercel_org_id
   PROJECT_ID=your_vercel_project_id
   ```
4. Каждый push в ветку `main` автоматически развернет приложение

## 🔧 Локальная разработка

### Требования
- Node.js 18+
- npm или yarn
- Google API Key (Gemini)

### Установка

```bash
git clone https://github.com/adrenolitik/aimedica-pdf-to-quiz-generator.git
cd aimedica-pdf-to-quiz-generator
npm install
```

### Настройка окружения

Создайте файл `.env.local`:
```bash
GOOGLE_API_KEY=your_google_api_key_here
```

Получить API ключ: [Google AI Studio](https://aistudio.google.com/app/apikey)

### Запуск

```bash
# Разработка
npm run dev

# Продакшн сборка
npm run build
npm start
```

Приложение будет доступно по адресу: `http://localhost:3000`


## Learn More

To learn more about Vercel AI SDK or Next.js take a look at the following resources:

- [AI SDK docs](https://sdk.vercel.ai/docs)
- [Vercel AI Playground](https://play.vercel.ai)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

