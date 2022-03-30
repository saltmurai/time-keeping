# FaceModel

import { drawLandmarks, drawRectangle } from "@mediapipe/drawing_utils";

## Data

| Name            | Type      | Description | Initial value                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bottomDialog`  | `boolean` |             | `false`                                                                                                                                                                                                                                                                                                                                                                                                       |
| `middleDialog`  | `boolean` |             | `false`                                                                                                                                                                                                                                                                                                                                                                                                       |
| `user`          | `object`  |             | `{"name":{"type":"string","value":"Nguyen Quang Minh","raw":"\"Nguyen Quang Minh\"","member":false},"id":{"type":"string","value":"001","raw":"\"001\"","member":false}}`                                                                                                                                                                                                                                     |
| `popUpCard`     | `object`  |             | `{"icon":{"type":"string","value":"mdi-account-circle-outline","raw":"\"mdi-account-circle-outline\"","member":false},"error":{"type":"string","value":"Placeholder text","raw":"\"Placeholder text\"","member":false},"errorText":{"type":"string","value":"Placeholder text","raw":"\"Placeholder text\"","member":false},"action":{"type":"string","value":"Thu lai","raw":"\"Thu lai\"","member":false}}` |
| `timerCount`    | `number`  |             | `30`                                                                                                                                                                                                                                                                                                                                                                                                          |
| `timerEnabled`  | `boolean` |             | `true`                                                                                                                                                                                                                                                                                                                                                                                                        |
| `camera`        | `unknown` |             | `null`                                                                                                                                                                                                                                                                                                                                                                                                        |
| `canvasElement` | `unknown` |             | `null`                                                                                                                                                                                                                                                                                                                                                                                                        |
| `videoElement`  | `unknown` |             | `null`                                                                                                                                                                                                                                                                                                                                                                                                        |
| `faceDetection` | `unknown` |             | `null`                                                                                                                                                                                                                                                                                                                                                                                                        |
| `resultImage`   | `unknown` |             | `null`                                                                                                                                                                                                                                                                                                                                                                                                        |

## Computed Properties

| Name              | Type     | Description                      |
| ----------------- | -------- | -------------------------------- |
| `toggleCanvas`    | `object` | **Dependencies:** `timerEnabled` |
| `lastFrameCanvas` | `object` | **Dependencies:** `$refs`        |

## Methods

### init()

**Syntax**

```typescript
init(): void
```

### onResults()

**Syntax**

```typescript
onResults(results: unknown): void
```

### play()

**Syntax**

```typescript
play(): void
```

### pause()

**Syntax**

```typescript
pause(): void
```

### renderImage()

**Syntax**

```typescript
renderImage(): void
```

### retry()

**Syntax**

```typescript
retry(): void
```

