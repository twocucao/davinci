import {
  Artboard,
  CImage,
  DLine,
  DRect,
  DText,
  HTransform,
} from "../../components";

export async function drawCardPunch_P1_001() {
  let defaultBackground =
    "http://schedule-1253442168.file.myqcloud.com/upload/file1574935644344.jpg";
  let defaultAvatar =
    "http://img.laiye.com/ajNVdqHZLLCjOXLicIVrSh3OtofBx98A33VZRIxRTZ3pbM0WmuEREicrGONaBvmVKnx6aibQ3cjhr2heCCKjcB4nuEqBT0o74nrQ1AARIzvwzU.jpg";
  let defaultQrcode =
    "http://img.laiye.com/G0gmxRbVb4GgMwAk5B4VKeX6a0mfB5HXtjdv9YMZkj03D0A.png";

  let canvasWidth = 1125;
  let canvasHeight = 1125;
  let hWidth = canvasWidth / 2;
  let hHeight = canvasWidth / 2;

  let triWidth = canvasWidth / 3;
  let triHeight = canvasWidth / 3;

  let TMPL = new Artboard(
    "TMPL",
    {
      height: canvasHeight,
      width: canvasWidth,
      quality: 0.85,
    },
    defaultBackground,
    [
      //  左上方
      new CImage("avatar", defaultAvatar, {
        position: { x: 32, y: 52 },
        width: 132,
        height: 132,
        shape: "Circle",
        border: {
          width: 4,
          color: "#FFF",
        },
      }),
      //  左中
      new DText("xxx", "连续早起", {
        position: { x: 30, y: 265 },
        fontSize: 37,
        fillStyle: "#FFF",
      }),
      new DText(
        "xxx",
        "222",
        {
          position: { x: 34, y: 302 },
          fontSize: 100,
          fillStyle: "#FFF",
          fontWeight: "bold",
        },
        true,
      ),
      // 通过 transformMeasureCoord 使得坐标系落在结尾处
      new DText("xxx", "天", {
        position: { x: 10, y: -100 },
        fontSize: 44,
        fillStyle: "#FFF",
      }),
      new HTransform(),
      //  左中
      new DText("xxx", "今日打卡", {
        position: { x: 30, y: 452 },
        fontSize: 37,
        fillStyle: "#FFF",
      }),
      new DText("xxx", "11:40", {
        position: { x: 30, y: 490 },
        fontSize: 100,
        fillStyle: "#FFF",
        fontWeight: "bold",
      }),
      new DLine("xxx", {
        position: {
          x1: 34,
          x2: 369,
          y1: 645,
          y2: 645,
        },
        strokeStyle: "#FFF",
        lineWidth: 3,
        type: "solid",
      }),
      new DText("xxx", "7993984人正在参与", {
        position: { x: 34, y: 675 },
        fontSize: 36,
        fillStyle: "#FFF",
      }),
      new DText("xxx", "比1万人起的早", {
        position: { x: 34, y: 720 },
        fontSize: 37,
        fillStyle: "#FFF",
      }),
      //  右上
      new DText("xxx", "25", {
        position: { x: 1087.5, y: 45.5 },
        fontSize: 70,
        textAlign: "right",
        fillStyle: "#FFF",
      }),
      new DText("xxx", "2019.09", {
        position: { x: 1087.5, y: 120 },
        fontSize: 50,
        textAlign: "right",
        fillStyle: "#FFF",
      }),
      //  右下
      new CImage("qrcode", defaultQrcode, {
        position: { x: 944, y: 944 },
        width: 146,
        height: 146,
        shape: "Rect",
      }),
      new DText("xxx", "不管多么崎岖不平", {
        position: { x: 915, y: 940 },
        fontSize: 38,
        textAlign: "right",
        fillStyle: "#FFF",
        fontWeight: "bold",
      }),
      new DText("xxx", "也比站在原地更接近幸福", {
        position: { x: 915, y: 988 },
        fontSize: 36,
        textAlign: "right",
        fillStyle: "#FFF",
        fontWeight: "bold",
      }),
      new DText("xxx", "扫码和我互道晚安", {
        position: { x: 915, y: 1045 },
        fontSize: 34,
        fillStyle: "#FFF",
        textAlign: "right",
      }),
    ],
  );

  await TMPL.draw();
  return TMPL;
}
