# FaceScanView

import { Camera } from "@mediapipe/camera_utils";

## Data

| Name              | Type      | Description | Initial value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------- | --------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pickedStaff`     | `unknown` |             | `null`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `popUpCard`       | `object`  |             | `{"icon":{"type":"string","value":"mdi-account-cicle-outline","raw":"\"mdi-account-cicle-outline\"","member":false},"error":{"type":"string","value":"Đào tạo dữ liệu thành công","raw":"\"Đào tạo dữ liệu thành công\"","member":false},"errorText":{"type":"string","value":"Bạn đã có dữ liệu khuôn mặt, giờ bạn có thể bắt đầu chấm công.","raw":"\"Bạn đã có dữ liệu khuôn mặt, giờ bạn có thể bắt đầu chấm công.\"","member":false},"action":{"type":"string","value":"Chấm công","raw":"\"Chấm công\"","member":false}}`                                                                                                                 |
| `search`          | `string`  |             | `""`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `middleDialog`    | `boolean` |             | `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `bottomDialog`    | `boolean` |             | `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `pickStaffDialog` | `boolean` |             | `true`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `radioGroup`      | `string`  |             | `""`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `infoDialog`      | `object`  |             | `{"title":{"type":"string","value":"Quét mặt thành công","raw":"\"Quét mặt thành công\"","member":false},"text":{"type":"string","value":"Vui lòng đợi quá trình đào tạo dữ liệu","raw":"\"Vui lòng đợi quá trình đào tạo dữ liệu\"","member":false}}`                                                                                                                                                                                                                                                                                                                                                                                          |
| `staffs`          | `array`   |             | `[ { staffId: "0001", avatar: "", name: "Nguyen Van Nam" }, { staffId: "0002", avatar: "", name: "Luong Mai" }, { staffId: "0003", avatar: "", name: "Tran Manh Tuan" }, { staffId: "0004", avatar: "", name: "Le Hoai My" }, { staffId: "0005", avatar: "", name: "Hoang Manh Quyet" }, { staffId: "0006", avatar: "", name: "Chu Thi Hao" }, { staffId: "0007", avatar: "", name: "Nguyen Lam Anh" }, { staffId: "0008", avatar: "", name: "Hua Ha Vi" }, { staffId: "0009", avatar: "", name: "Le Quyet Thang" }, { staffId: "0010", avatar: "", name: "Nguyen Quang Thanh" }, { staffId: "0011", avatar: "", name: "Nguyen Huu Chien" }, ]` |

## Computed Properties

| Name            | Type      | Description                          |
| --------------- | --------- | ------------------------------------ |
| `filteredStaff` | `unknown` | **Dependencies:** `staffs`, `search` |
| `isChooseStaff` | `object`  | **Dependencies:** `pickedStaff`      |

## Methods

### init()

**Syntax**

```typescript
init(): void
```

### handleClickMiddleDialog()

**Syntax**

```typescript
handleClickMiddleDialog(): void
```

### handleClickRadio()

**Syntax**

```typescript
handleClickRadio(staff: unknown): void
```

### handleClickXacNhanButton()

**Syntax**

```typescript
handleClickXacNhanButton(): void
```

