# LoginView

## Data

| Name          | Type      | Description | Initial value                                  |
| ------------- | --------- | ----------- | ---------------------------------------------- |
| `loading`     | `boolean` |             | `false`                                        |
| `snackbar`    | `boolean` |             | `false`                                        |
| `otp`         | `string`  |             | `""`                                           |
| `text`        | `string`  |             | `"Vui lòng nhập mã pin 6 chữ số để đăng nhập"` |
| `text_color`  | `string`  |             | `""`                                           |
| `expectedOtp` | `string`  |             | `"123456"`                                     |
| `inputOtp`    | `string`  |             | `""`                                           |

## Methods

### onFinish()

**Syntax**

```typescript
onFinish(rsp: unknown): void
```

### onLogin()

**Syntax**

```typescript
onLogin(rsp: unknown): void
```

