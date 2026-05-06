const CONFIG = {
  // Spreadsheet đang dùng theo link anh đã lưu trước đó.
  spreadsheetId: '1ODNEqtj2PdGByUlSGkAgrkDdqBp72-3lmxktdJPT_yo',
  masterSheetName: 'Master Store',
  logSheetName: 'PrintLog',
  timezone: 'Asia/Bangkok',
  cartonSeqDigits: 5
};

const MASTER_STORE_ROWS = [
  [
    "VN0435",
    "VN0435 The West"
  ],
  [
    "VN0436",
    "VN0436 Doi Can"
  ],
  [
    "VN0437",
    "VN0437 Nguyen Huu Huan"
  ],
  [
    "VN0438",
    "VN0438 Ha Trung"
  ],
  [
    "VN0439",
    "VN0439 Hang Dau"
  ],
  [
    "VN0442",
    "VN0442 Taisei Square"
  ],
  [
    "VN0443",
    "VN0443 Nguyen Ngoc Vu"
  ],
  [
    "VN0444",
    "VN0444 Dao Duy Anh"
  ],
  [
    "VN0446",
    "VN0446 Trieu Khuc"
  ],
  [
    "VN0447",
    "VN0447 Nguyen Son"
  ],
  [
    "VN0448",
    "VN0448 Nguyen Van Loc"
  ],
  [
    "VN0450",
    "VN0450 Mipec Tower"
  ],
  [
    "VN0451",
    "VN0451 36 Duy Tan"
  ],
  [
    "VN0452",
    "VN0452 Park 1"
  ],
  [
    "VN0453",
    "VN0453 Park 11"
  ],
  [
    "VN0454",
    "VN0454 Park 3"
  ],
  [
    "VN0459",
    "VN0459 Ngu Xa"
  ],
  [
    "VN0460",
    "VN0460 Skyline"
  ],
  [
    "VN0461",
    "VN0461 Dai hoc Dai Nam"
  ],
  [
    "VN0462",
    "VN0462 Le Trong Tan"
  ],
  [
    "VN0464",
    "VN0464 DH Thuy Loi"
  ],
  [
    "VN0465",
    "VN0465 FLC Pham Hung"
  ],
  [
    "VN0466",
    "VN0466 The Terra 1"
  ],
  [
    "VN0467",
    "VN0467 The Terra 2"
  ],
  [
    "VN0468",
    "VN0468 Vinhomes Sym"
  ],
  [
    "VN0469",
    "VN0469 Nguyen Khuyen"
  ],
  [
    "VN0470",
    "VN0470 Nguy Nhu Kon Tum"
  ],
  [
    "VN0471",
    "VN0471 KĐT Van Phu"
  ],
  [
    "VN0472",
    "VN0472 CT1 Ngo Thi Nham"
  ],
  [
    "VN0473",
    "VN0473 Thang Long Tower"
  ],
  [
    "VN0474",
    "VN0474 Chua Lang"
  ],
  [
    "VN0476",
    "VN0476 HV Nong Nghiep"
  ],
  [
    "VN0477",
    "VN0477 Dai Hoc Ha Noi"
  ],
  [
    "VN0479",
    "VN0479 D Capitale"
  ],
  [
    "VN0480",
    "VN0480 Hang Bong"
  ],
  [
    "VN0484",
    "VN0484 Le Van Luong"
  ],
  [
    "VN0485",
    "VN0485 Lang S.Vien Hacinco"
  ],
  [
    "VN0486",
    "VN0486 N03 Ngoai Giao Doan"
  ],
  [
    "VN0488",
    "VN0488 DH Su Pham"
  ],
  [
    "VN0490",
    "VN0490 Vu Trong Phung"
  ],
  [
    "VN0492",
    "VN0492 Century Tower"
  ],
  [
    "VN0495",
    "VN0495 IEC Thanh Tri"
  ],
  [
    "VN0496",
    "VN0496 Luxury Park Views"
  ],
  [
    "VN0497",
    "VN0497 Licogi 13"
  ],
  [
    "VN0498",
    "VN0498 Ma May"
  ],
  [
    "VN0499",
    "VN0499 The Armor Giang Vo"
  ],
  [
    "VN0500",
    "VN0500 Nguyen Trai"
  ],
  [
    "VN0501",
    "VN0501 Tran Dai Nghia"
  ],
  [
    "VN0502",
    "VN0502 Vinaconex 3"
  ],
  [
    "VN0503",
    "VN0503 Chien Thang T.Liet"
  ],
  [
    "VN0506",
    "VN0506 Vincom Tran Duy Hung"
  ],
  [
    "VN0507",
    "VN0507 Tran Van Lai"
  ],
  [
    "VN0509",
    "VN0509 To Hien Thanh"
  ],
  [
    "VN0510",
    "VN0510 GD Palace Tu Liem"
  ],
  [
    "VN0511",
    "VN0511 Super Hotel"
  ],
  [
    "VN0512",
    "VN0512 Vu Pham Ham"
  ],
  [
    "VN0515",
    "VN0515 Ngoai Giao Doan 2"
  ],
  [
    "VN0518",
    "VN0518 Tam Trinh"
  ],
  [
    "VN0514",
    "VN0514 DH Ngoai Thuong"
  ],
  [
    "VN0519",
    "VN0519 Nguyen Huy Tuong"
  ],
  [
    "VN0524",
    "VN0524 DH Lao Dong XH"
  ],
  [
    "VN0523",
    "VN0523 CMC Cau Giay"
  ],
  [
    "VN0521",
    "VN0521 Riverside Phu Thuong"
  ],
  [
    "VN0522",
    "VN0522 Sunshine Tu Liem"
  ],
  [
    "VN0528",
    "Hope Residences"
  ],
  [
    "VN0531",
    "Tecco Skyville Tower Thanh Tri"
  ]
];

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('In tem carton')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function setupMasterStore() {
  const ss = SpreadsheetApp.openById(CONFIG.spreadsheetId);
  let sheet = ss.getSheetByName(CONFIG.masterSheetName);
  if (!sheet) sheet = ss.insertSheet(CONFIG.masterSheetName);
  sheet.clearContents();
  sheet.getRange(1, 1, 1, 2).setValues([['ID', 'STORE NAME']]);
  sheet.getRange(2, 1, MASTER_STORE_ROWS.length, 2).setValues(MASTER_STORE_ROWS);
  sheet.autoResizeColumns(1, 2);
  ensureLogSheet_();
  return `Đã nạp ${MASTER_STORE_ROWS.length} store vào sheet ${CONFIG.masterSheetName}.`;
}

function getStoreMap() {
  const ss = SpreadsheetApp.openById(CONFIG.spreadsheetId);
  const sheet = ss.getSheetByName(CONFIG.masterSheetName);
  if (!sheet) throw new Error('Chưa có sheet "' + CONFIG.masterSheetName + '". Hãy chạy setupMasterStore() trước.');
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return {};
  const values = sheet.getRange(2, 1, lastRow - 1, 2).getValues();
  const map = {};
  values.forEach(([id, name]) => {
    if (id && name) map[String(id).trim().toUpperCase()] = String(name).trim();
  });
  return map;
}

function lookupStore(doNumber) {
  const storeId = parseStoreId_(doNumber);
  const storeName = getStoreMap()[storeId] || '';
  return { storeId, storeName };
}

function generateLabels(doNumber, quantity) {
  doNumber = String(doNumber || '').trim();
  const qty = Number(quantity);
  if (!doNumber) throw new Error('Vui lòng scan/nhập số DO.');
  if (!Number.isInteger(qty) || qty < 1 || qty > 500) throw new Error('Số lượng tem phải từ 1 đến 500.');

  const storeId = parseStoreId_(doNumber);
  const storeMap = getStoreMap();
  const storeName = storeMap[storeId];
  if (!storeName) throw new Error('Không tìm thấy Store ID ' + storeId + ' trong Master Store.');

  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const now = new Date();
    const datePart = Utilities.formatDate(now, CONFIG.timezone, 'yyMMdd');
    const prefix = 'C' + datePart;
    const props = PropertiesService.getScriptProperties();
    const propKey = 'LAST_CARTON_SEQ_' + datePart;
    let lastSeq = Number(props.getProperty(propKey) || 0);

    // Nếu Properties bị reset, lấy số lớn nhất trong PrintLog để tránh trùng.
    lastSeq = Math.max(lastSeq, getMaxSeqFromLog_(prefix));

    const labels = [];
    const logRows = [];
    for (let i = 1; i <= qty; i++) {
      const seq = lastSeq + i;
      const cartonId = prefix + String(seq).padStart(CONFIG.cartonSeqDigits, '0');
      labels.push({
        doNumber,
        storeId,
        storeName,
        cartonId,
        printedAt: Utilities.formatDate(now, CONFIG.timezone, 'yyyy-MM-dd HH:mm:ss')
      });
      logRows.push([new Date(), doNumber, storeId, storeName, cartonId, Session.getActiveUser().getEmail()]);
    }

    const logSheet = ensureLogSheet_();
    logSheet.getRange(logSheet.getLastRow() + 1, 1, logRows.length, logRows[0].length).setValues(logRows);
    props.setProperty(propKey, String(lastSeq + qty));
    return labels;
  } finally {
    lock.releaseLock();
  }
}

function parseStoreId_(doNumber) {
  const clean = String(doNumber || '').trim().toUpperCase();
  if (clean.length < 6) throw new Error('DO phải có ít nhất 6 ký tự để lấy Store ID.');
  return clean.slice(0, 6);
}

function ensureLogSheet_() {
  const ss = SpreadsheetApp.openById(CONFIG.spreadsheetId);
  let sheet = ss.getSheetByName(CONFIG.logSheetName);
  if (!sheet) sheet = ss.insertSheet(CONFIG.logSheetName);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, 6).setValues([['Printed At', 'DO', 'Store ID', 'Store Name', 'Carton ID', 'User']]);
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, 6);
  }
  return sheet;
}

function getMaxSeqFromLog_(prefix) {
  const ss = SpreadsheetApp.openById(CONFIG.spreadsheetId);
  const sheet = ss.getSheetByName(CONFIG.logSheetName);
  if (!sheet || sheet.getLastRow() < 2) return 0;
  const values = sheet.getRange(2, 5, sheet.getLastRow() - 1, 1).getValues().flat();
  let maxSeq = 0;
  values.forEach(id => {
    id = String(id || '');
    if (id.startsWith(prefix)) {
      const seq = Number(id.slice(prefix.length));
      if (seq > maxSeq) maxSeq = seq;
    }
  });
  return maxSeq;
}
