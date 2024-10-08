### Start docker compose
```bash
cd monitoring
docker compose up
```
## Telegram bot
### Шаг 1: Создание бота в Telegram и получение токена

1. **Открыть Telegram** и найти бота `@BotFather`.
2. Написать команду `/start`, чтобы начать общение.
3. Написать команду `/newbot`, чтобы создать нового бота.
4. Придумать и ввести имя для бота (например, "MyBot").
5. Придумать и ввести уникальное имя пользователя для бота (например, "my_bot_12345"). Оно должно заканчиваться на "bot".
6. После этого BotFather отправит вам сообщение с **токеном** для вашего бота. Пример:
   ```
   Use this token to access the HTTP API:
   7111980622:AAF2QdWAVjdoUmM2wWn4qQBlpj42xaxYZNU
   ```
   Этот токен понадобится для подключения бота к вашему приложению.

### Шаг 2: Подключение бота в чат

1. Найдите созданного бота в Telegram (по его уникальному имени пользователя).
2. Нажмите на его профиль и выберите **"Start"**, чтобы активировать бота.
3. Добавьте бота в нужную группу или канал:
    - Перейдите в чат или группу, где хотите использовать бота.
    - Откройте список участников и нажмите **"Добавить участников"**.
    - Найдите своего бота и добавьте его с правами администратора.

### Шаг 3: Как узнать идентификатор чата (Chat ID)

Чтобы узнать `chat_id`, можно использовать одного из следующих способов:

#### Способ 1: Использовать HTTP-запрос
1. Отправьте любое сообщение в чат с ботом.
2. Вызовите метод Telegram API для получения обновлений:
   ```
   https://api.telegram.org/bot<ваш_токен>/getUpdates
   ```
   Пример:
   ```
   https://api.telegram.org/bot7111980622:AAF2QdWAVjdoUmM2wWn4qQBlpj42xaxYZNU/getUpdates
   ```
3. В ответе вы увидите идентификатор чата, который будет в поле `"chat" -> "id"`.

#### Способ 2: Использовать сторонние сервисы
Вы можете использовать Telegram-боты, такие как `@userinfobot` или `@chatid_echo_bot`. Достаточно добавить их в чат, и они отправят сообщение с идентификатором чата.
Теперь вы знаете, как получить токен бота, идентификатор чата и как подключить бота к чату!

## Test alert
Отправьте тестовый алерт в Alertmanager:
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '[{
    "status": "firing",
    "labels": {
      "alertname": "TestAlert",
      "severity": "critical"
    },
    "annotations": {
      "summary": "Test alert for Telegram integration"
    },
    "startsAt": "2024-09-16T00:00:00Z",
    "endsAt": "2024-09-16T00:00:00Z"
  }]' http://localhost:9093/api/v2/alerts
```