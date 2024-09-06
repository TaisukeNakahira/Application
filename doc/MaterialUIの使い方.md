# デフォルトのコンポーネントを使う
- `@mui/material`をインポートして使用する
    ```ts
    import * as React from "react";
    import { Button } from "@mui/material";

    const  App = () => {
      return (
        <>
          <Button>text</Button> // デフォルトのボタン
          <Button variant="contained">contained</Button> // 色で塗りつぶされたボタン
          <Button variant="outlined">outlined</Button> // 外枠の線のみのボタン
        </>
      );
    };
    export default App;
    ```

# スタイルの微調整を行う
- `@emotion/styled`をインポートして使用する
    ```ts
    import * as React from "react";
    import { Button } from "@mui/material";
    import styled from "@emotion/styled";

    const TextButton = styled(Button)`
      text-transform: none;
    `; // emotionのstyledを使用してCSSを微調整

    const  App = () => {
      return (
        <>
          <TextButton>text</TextButton> // styledで作成したコンポーネントをタグに設定
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outlined</Button>
        </>
      );
    };
    export default App;
    ```