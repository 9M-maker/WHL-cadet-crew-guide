const DATA = {
  "parents": [
    {
      "id": "taiwan",
      "icon": "🇹🇼",
      "title": "台灣適任證書（大證/GMDSS）申請",
      "desc": "應備資料、三份主要申請文件、自行換證說明與空白表單下載。",
      "children": [
        "tw_overview",
        "tw_coc",
        "tw_proxy",
        "tw_service",
        "tw_self",
        "tw_download"
      ]
    },
    {
      "id": "training",
      "icon": "📒",
      "title": "訓練紀錄簿撰寫注意事項",
      "desc": "從第一條船開始填寫，到滿 365 日後送審，請務必閱讀常見錯誤範例。",
      "children": [
        "tr_start",
        "tr_sign",
        "tr_final",
        "tr_fix",
        "tr_submit",
        "tr_official",
        "tr_errors"
      ]
    },
    {
      "id": "sg",
      "icon": "🇸🇬",
      "title": "新加坡證書申請注意事項",
      "desc": "應備文件、檔案命名規則、SBTA／IMDA 申請書與台灣證件、英文培訓證明範例。",
      "children": [
        "sg_overview",
        "sg_filename",
        "sg_sbta",
        "sg_imda",
        "sg_twdocs",
        "sg_certs",
        "sg_other",
        "sg_sash",
        "sg_download"
      ]
    }
  ],
  "children": [
    {
      "id": "tw_overview",
      "parent": "taiwan",
      "title": "應備資料總覽",
      "short": "先確認訓練紀錄簿、規費、體檢、證書與照片是否齊全。",
      "keywords": "台灣 大證 換證 應備資料 費用 訓練紀錄簿 體檢 考試及格證書 照片 手冊 護照",
      "html": `
      "<div class='scroll'><table><thead><tr><th>項目</th><th>重點</th></tr></thead>
      <tbody><tr><td>訓練紀錄簿</td><td>可於實際滿 365 天前先寄；封面貼便利貼註明姓名與滿 365 天日期。</td></tr>
      <tr><td>規費</td><td>新台幣 1,800 元現金：適任大證 800元＋GMDSS 大證 800元＋資歷證明規費 200元。</td></tr>
      <tr><td>台灣體檢表</td><td>正本 1 份，效期 1 年內；簽名欄記得簽，現職勾「航海員」。</td></tr>
      <tr><td>航海人員考試及格證書</td><td>正本與影本各 1 份；不要提供成績單。</td></tr>
      <tr><td>適任證書申請表</td><td>正本 2 張，依範例填寫並簽名。</td></tr>
      <tr><td>辦理執照委託書</td><td>正本 1 張，依範例填寫並簽名。</td></tr>
      <tr><td>船員服務經歷證明申請書</td><td>正本 1 張，正確填寫並簽名。</td>
      </tr><tr><td>1 吋大頭照</td><td>請提供 4 張（不含已貼在申請表上的）。</td></tr>
      <tr><td>船員手冊影本</td><td>第一頁及最新資歷頁。</td></tr>
      <tr><td>護照影本</td><td>第一頁至最後一個有出入境章頁面；在國輪上者可不用提供。</td></tr>
      </tbody></table></div>
      <div class='note'>項目 2～10 請整理在一個 L 型資料夾，連同訓練紀錄簿放入同一信封寄送。</div>"`,
      
      "imgs": [
        [
          "../assets_cer_renewal/docs/taiwan/checklist.jpg",
          "應備資料檢查表"
        ]
      ]
    },
    {
      "id": "tw_coc",
      "parent": "taiwan",
      "title": "適任證書申請書 填寫範例",
      "short": "正本 2 張，依範例正確填寫後簽名。",
      "keywords": "適任證書 申請書 2張 正本 範例",
      "html": "<ul><li>提供正本 2 張：「一等船副」＆「GMDSS值機員」各一。</li><li>請依範例正確填寫。</li><li>完成後簽名寄回承辦人。</li></ul>",
      "imgs": [
        [
          "../assets_cer_renewal/docs/taiwan/coc-form-sample.jpg",
          "(SAMPLE) 船員適任證書申請書"
        ]
      ]
    },
    {
      "id": "tw_proxy",
      "parent": "taiwan",
      "title": "辦理執照委託書 填寫範例",
      "short": "正本 1 張，依範例填寫並簽名。",
      "keywords": "委託書 辦理執照 填寫範例",
      "html": "<ul><li>提供正本 1 張：勾選「船員適任證書」即可。</li><li>請依範例正確填寫。</li><li>完成後簽名寄回承辦人。</li></ul>",
      "imgs": [
        [
          "../assets_cer_renewal/docs/taiwan/proxy-sample.jpg",
          "(SAMPLE) 辦理執照委託書"
        ]
      ]
    },
    {
      "id": "tw_service",
      "parent": "taiwan",
      "title": "船員服務經歷證明申請書  填寫範例",
      "short": "正本 1 張，正確填寫並簽名。",
      "keywords": "服務經歷 證明 申請書 正本 填寫範例",
      "html": "<ul><li>提供正本 1 張。</li><li>請正確填寫各欄位，包涵服務資歷起迄日。</li><li>完成後簽名寄回承辦人。</li></ul>",
      "imgs": [
        [
          "../assets_cer_renewal/docs/taiwan/service-record-sample.jpg",
          "船員服務經歷證明申請書｜表單預覽"
        ]
      ]
    },
    {
      "id": "tw_self",
      "parent": "taiwan",
      "title": "自行換證",
      "short": "自行前往航港局辦理時的地點、費用與提醒。",
      "keywords": "自行換證 自行申請 台灣船副適任證書 航港局 北航 中航 南航 東航 費用",
      "html": "\n<ul>\n  <li><strong>辦理地點：</strong>請至交通部航港局各地區港務中心（北航／中航／南航／東航）自行換證。</li>\n  <li><strong>事前提醒：</strong>建議先打電話確認應備資料細節與營業時間，再前往辦理。</li>\n  <li><strong>換證費用：</strong>交通部適任證書 800 元 + GMDSS 800 元（實際金額仍請自行確認）。</li>\n  <li><strong>費用說明：</strong>自行換證的費用需由本人負擔，無法向公司報核。</li>\n  <li><strong>應備文件：</strong>請見「船員適任證書申請書」所列之項目。</li>\n</ul>\n<div class=\"note\">海員手冊、訓練紀錄簿將於公司長官簽核完成後寄還給您。</div>\n",
      "imgs": []
    },
    {
      "id": "tw_download",
      "parent": "taiwan",
      "title": "空白表單下載",
      "short": "為確保申請表單為最新版本，下載連結將導向航港局網站下載專區。",
      "keywords": "空白 表單 下載 申請表 適任證書 辦理執照委託書 船員服務經歷證明申請書",
      "html": `
        <div class="downloads">
        <div class="drow">
        <div>
          <h4>適任證書申請書</h4>
          <p>交通部航港局空白表單</p>
        </div>
        <a
          class="download-btn"
          href="https://www.motcmpb.gov.tw/DownloadFile/Search?SearchKey=適任&SiteId=1&NodeId=83&BaseCategoryId=59&IsTop=false"
          target="_blank"
          rel="noopener"
        >
          點擊下載表單
        </a>
      </div>

      <div class="drow">
        <div>
          <h4>辦理執照委託書</h4>
          <p>交通部航港局空白表單</p>
        </div>
        <a
          class="download-btn"
          href="https://www.motcmpb.gov.tw/DownloadFile/Search?SearchKey=辦理船員業務&SiteId=1&NodeId=83&BaseCategoryId=&IsTop=false"
          target="_blank"
          rel="noopener"
        >
          點擊下載表單
        </a>
      </div>

      <div class="drow">
        <div>
          <h4>船員服務經歷證明申請書</h4>
          <p>交通部航港局空白表單</p>
        </div>
        <a
          class="download-btn"
          href="https://www.motcmpb.gov.tw/DownloadFile/Search?SearchKey=船員服務經歷證明申請書&SiteId=1&NodeId=83&BaseCategoryId=59&IsTop=false"
          target="_blank"
          rel="noopener"
        >
          點擊下載表單
        </a>
      </div>

    </div>
  `,
  "imgs": []
},
    {
  "id": "tr_attention",
  "parent": "training",
  "title": "訓練紀錄簿填寫注意事項",
  "short": "訓練紀錄簿自第一條船起即應開始填寫，並注意船章、簽署、總結報告、塗改及補簽等相關規定。",
  "keywords": "訓練紀錄簿 第12頁 船員名單 船章 蓋章 公司審核 簽署人 C頁 總結報告 船長評語 評定意見 塗改 補簽 其他公司 非萬海 實習",
  "html": `
    <h3>一、上船前準備與基本填寫</h3>

    <p>
      上船前請先購買訓練紀錄簿，並自<strong>第一條實習船舶</strong>開始填寫，
      即使第一條船並非萬海船舶，也應依規定留下完整的訓練紀錄。
    </p>

    <p>
      填寫前請先閱讀訓練紀錄簿內的說明，並依各頁要求完整填寫。
      其中第 12 頁應先填妥曾任職或實習過的各條船舶名稱。
    </p>

    <p>
      船員名單等需附於紀錄簿內的資料，建議使用訂書機固定，
      或以較牢固的方式黏貼，避免航程期間脫落或遺失。
    </p>

    <div class="guide-image">
      <img src="assets_crew_cer_renewal/tr_attention_01.jpg"
           alt="訓練紀錄簿基本填寫範例"
           loading="lazy">
    </div>


    <h3>二、簽署、蓋章與簽署人資料</h3>

    <p>
      訓練紀錄簿<strong>每一頁均需加蓋船章</strong>。
      填寫及簽署時，請特別確認是否有漏蓋船章的情形。
    </p>

    <p>
      C 頁若已填寫完畢，可自行影印後繼續使用，
      但新增的影印頁同樣必須加蓋船章。
    </p>

    <p>
      訓練簽署人與學員於訓練期間應服務於<strong>同一艘船舶</strong>，
      並依訓練紀錄簿規定具有相應職務資格。
      若簽署人員基本資料表的欄位不足，可自行增加填寫欄位。
    </p>

    <div class="guide-image">
      <img src="assets_crew_cer_renewal/tr_attention_02.jpg"
           alt="訓練紀錄簿簽署及蓋章範例"
           loading="lazy">
    </div>


    <h3>三、總結報告與船長評語</h3>

    <p>
      相關總結頁面中間請自行準備複寫紙，
      再交由船長及公司長官填寫評語與簽名，
      並確認相關兩頁皆有加蓋船章。
    </p>

    <p>
      船長評語內容可包含完成相關訓練、實習期間表現良好或令人滿意，
      以及具備合格船副能力等相關評定內容。
    </p>

    <p>
      <strong>總結報告一定要填寫評定意見並完成簽署。</strong>
      依官方審查規定，若總結報告未填寫評定意見，可能不予受理，
      因此下船前務必再次確認。
    </p>

    <div class="guide-image">
      <img src="assets_crew_cer_renewal/tr_attention_03.jpg"
           alt="總結報告及船長評語填寫範例"
           loading="lazy">
    </div>


    <h3>四、塗改、補簽及其他公司實習紀錄</h3>

    <p>
      若訓練紀錄簿內容有塗改，請在塗改位置側邊貼上標籤，
      並使用鉛筆將需要確認的位置圈起來，後續需由公司蓋章確認。
    </p>

    <p>
      若填寫時不知道同船長官的下船日期，
      也可先以<strong>標籤加鉛筆圈選</strong>方式註記，
      後續再由公司協助補填。
    </p>

    <p>
      曾於其他公司船舶實習者，如後續以萬海船員身分辦理換證，
      原有訓練紀錄中的簽名旁，可能需要再由萬海船上長官補簽，
      請依實際換證資料要求辦理。
    </p>

    <p>
      下船前請完整檢查訓練紀錄簿，
      特別確認是否有<strong>漏簽名、漏填資料或漏蓋船章</strong>，
      避免下船後仍需將紀錄簿重新送回船上補辦。
    </p>

    <div class="guide-image">
      <img src="assets_crew_cer_renewal/tr_attention_04.jpg"
           alt="訓練紀錄簿塗改及補簽範例"
           loading="lazy">
    </div>
  `,
  "imgs": [
    "assets_crew_cer_renewal/tr_attention_01.jpg",
    "assets_crew_cer_renewal/tr_attention_02.jpg",
    "assets_crew_cer_renewal/tr_attention_03.jpg",
    "assets_crew_cer_renewal/tr_attention_04.jpg"
  ]
},
    {
      "id": "tr_submit",
      "parent": "training",
      "title": "訓練簿寄回注意事項",
      "short": "實習天數即將滿 365 日時，寄回公司審核與簽章注意事項。",
      "keywords": "365天 滿365 送審 公司 審核",
      "html": "<ul><li>預期實習天數即將滿 <strong>365 日</strong>前，可寄回公司審核，由PIC交予長官簽名蓋章。</li><li>複寫紙請先自行裁好、釘好或貼好再寄送。</li><li>寄出前再次確認需蓋章、簽名及補填位置是否已標示清楚。</li></ul>",
      "imgs": []
    },
    {
      "id": "tr_official",
      "parent": "training",
      "title": "官方審查作業規定與紀錄簿填寫範例",
      "short": "提供 航港局審查作業規定 與 2A 操作級航行員範例 參考。",
      "keywords": "航港局 官方 審查 2A 範例 PDF",
      "html": "<p>請點擊下方連結查閱完整PDF檔案說明。</p><div class='file-actions'><a class='file-link' href='../assets_cer_renewal/docs/training/official-review-rules.pdf' target='_blank' rel='noopener'>開啟審查作業規定（完整版） ↗</a><a class='file-link' href='../assets_cer_renewal/docs/training/official-sample-book.pdf' target='_blank' rel='noopener'>開啟 2A 操作級航行員訓練紀錄簿範例（請詳閱完整版） ↗</a></div>",
      "imgs": [
        [
          "../assets_cer_renewal/docs/training/official-review-rules.jpg",
          "船上訓練紀錄簿審查作業規定｜第 1 頁"
        ],
        [
          "../assets_cer_renewal/docs/training/official-sample-book.jpg",
          "2A 操作級航行員訓練紀錄簿範例｜第 1 頁"
        ]
      ]
    },
    {
      "id": "tr_errors",
      "parent": "training",
      "title": "常見錯誤範例",
      "short": "請務必按此範例檢查紀錄簿內容。",
      "keywords": "錯誤範例 常漏資訊 救生艇 絞纜機 淡水艙 夏季乾舷 日期 船長",
      "html": "請落實點閱各項，確實檢查自己有沒有少填或填錯。</p>\n<div class=\"error-list\">\n\n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">01</span>\n        <span>沒列出簽名人姓名</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"../assets_cer_renewal/docs/training/errors/case-01.jpg\" alt=\"錯誤案例 1：沒列出簽名人姓名\" data-full=\"../assets_cer_renewal/docs/training/errors/case-01.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">02</span>\n        <span>沒有填船名</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"../assets_cer_renewal/docs/training/errors/case-02.jpg\" alt=\"錯誤案例 2：沒有填船名\" data-full=\"../assets_cer_renewal/docs/training/errors/case-02.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">03</span>\n        <span>救生艇資訊沒有填</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"../assets_cer_renewal/docs/training/errors/case-03.jpg\" alt=\"錯誤案例 3：救生艇資訊沒有填\" data-full=\"../assets_cer_renewal/docs/training/errors/case-03.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">04</span>\n        <span>救生艇類型沒有填</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"../assets_cer_renewal/docs/training/errors/case-04.jpg\" alt=\"錯誤案例 4：救生艇類型沒有填\" data-full=\"../assets_cer_renewal/docs/training/errors/case-04.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">05</span>\n        <span>絞纜機資訊漏填</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"../assets_cer_renewal/docs/training/errors/case-05.jpg\" alt=\"錯誤案例 5：絞纜機資訊漏填\" data-full=\"../assets_cer_renewal/docs/training/errors/case-05.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">06</span>\n        <span>淡水艙資訊漏填</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"../assets_cer_renewal/docs/training/errors/case-06.jpg\" alt=\"錯誤案例 6：淡水艙資訊漏填\" data-full=\"../assets_cer_renewal/docs/training/errors/case-06.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">07</span>\n        <span>夏季乾舷資訊漏填</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"../assets_cer_renewal/docs/training/errors/case-07.jpg\" alt=\"錯誤案例 7：夏季乾舷資訊漏填\" data-full=\"../assets_cer_renewal/docs/training/errors/case-07.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">08</span>\n        <span>簽名日期沒有年份</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"../assets_cer_renewal/docs/training/errors/case-08.jpg\" alt=\"錯誤案例 8：簽名日期沒有年份\" data-full=\"../assets_cer_renewal/docs/training/errors/case-08.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">09</span>\n        <span>船長簽名沒有日期</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"../assets_cer_renewal/docs/training/errors/case-09.jpg\" alt=\"錯誤案例 9：船長簽名沒有日期\" data-full=\"../assets_cer_renewal/docs/training/errors/case-09.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">10</span>\n        <span>簽名者不是辦證當下的船長</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"../assets_cer_renewal/docs/training/errors/case-10.jpg\" alt=\"錯誤案例 10：簽名者不是辦證當下的船長\" data-full=\"../assets_cer_renewal/docs/training/errors/case-10.jpg\">\n      </div>\n    </details>\n    \n</div>\n",
      "imgs": []
    },
    {
      "id": "sg_overview",
      "parent": "sg",
      "title": "應備文件總表",
      "short": "確認台灣證件、英文培訓證明、照片與兩份申請書都準備好電子檔。",
      "keywords": "MED TW PP SMB PHOTO GMDSS COC BASIC FIRE BOAT FIRST AID ECDIS BRM SSD ARPA SBTA IMDA",
      "html": "<div class='scroll'><table><thead><tr><th>項目</th><th>指定檔名</th><th>重點</th></tr></thead><tbody><tr><td>交通部體檢表</td><td>MED TW</td><td>PDF，不超過 1000KB；正反面都需掃描，效期至少 8 個月。</td></tr><tr><td>護照</td><td>PP</td><td>PDF，不超過 1000KB；需有簽名。</td></tr><tr><td>海員手冊</td><td>SMB</td><td>PDF，不超過 1000KB；第一頁到資歷頁都需掃描。</td></tr><tr><td>大頭照</td><td>PHOTO</td><td>JPG，不超過 50KB；小於 400×514 pixels。</td></tr><tr><td>台灣證書</td><td>TW GMDSS／TW COC</td><td>PDF 或 JPG，不超過 1000KB。</td></tr><tr><td>英文培訓證明</td><td>BASIC／FIRE／BOAT／FIRST AID／ECDIS／BRM／SSD／ARPA</td><td>PDF 或 JPG，不超過 1000KB；其中 BASIC/FIRE/BOAT/FIRST AID 培訓日期需在 4 年 5 個月內。</td></tr><tr><td>Application Form-SBTA</td><td>SBTA</td><td>填妥、英文簽名、日期押填寫當日。</td></tr><tr><td>IMDA GMDSS Form</td><td>IMDA</td><td>填妥、英文簽名、日期押填寫當日。</td></tr></tbody></table></div>",
      "imgs": [
        [
          "../assets_cer_renewal/docs/singapore/document-list.jpg",
          "辦理新加坡證書應備文件總表"
        ]
      ]
    },
    {
      "id": "sg_filename",
      "parent": "sg",
      "title": "檔案格式、大小與命名規則",
      "short": "依指定檔名存成電子檔，並在檔名後加自己的英文名字首，避免檔案混亂。",
      "keywords": "檔名 命名 格式 大小 英文名字首",
      "html": "<ul><li>依總表指定檔名，例如 MED TW、PP、SMB、BASIC、SBTA、IMDA。</li><li>請於指定檔名後再加上自己的英文名字首，降低檔案混淆。ex: 王大明(WANG DA MING) → MED TW_WDM、PP_WDM。</li><li>各檔案須符合 PDF/JPG 與大小限制。</li></ul>",
      "imgs": [
        [
          "../assets_cer_renewal/docs/singapore/filename-rule.jpg",
          "檔名命名注意事項"
        ]
      ]
    },
    {
      "id": "sg_sbta",
      "parent": "sg",
      "title": "新加坡作業申請表（SBTA） 填寫範例",
      "short": "申請表提交後，請留意公司會寄送新加坡作業撰寫通知之信件。",
      "keywords": "SBTA 英文簽名 填寫 範例 新加坡 作業",
      "html": "<ul><li>依範例填妥各欄位。</li><li>英文簽名。</li><li>日期填寫當日。</li><li>指定檔名：SBTA。</li><li>PDF 或 JPG，不超過 1000KB。</li></ul>",
      "imgs": [
        [
          "../assets_cer_renewal/docs/singapore/sbta-sample.jpg",
          "(SAMPLE) Application Form-SBTA"
        ]
      ]
    },
    {
      "id": "sg_imda",
      "parent": "sg",
      "title": "新加坡GMDSS申請表（IMDA GOC） 填寫範例",
      "short": "申請表提交後，將由公司端協助新加坡換證事宜。",
      "keywords": "IMDA GMDSS 英文簽名 新加坡 申請 填寫 範例",
      "html": "<ul><li>依範例填妥各欄位。</li><li>英文簽名。</li><li>日期填寫當日。</li><li>指定檔名：IMDA。</li><li>PDF 或 JPG，不超過 1000KB。</li></ul>",
      "imgs": [
        [
          "../assets_cer_renewal/docs/singapore/imda-gmdss-sample.jpg",
          "(SAMPLE) IMDA GMDSS Form"
        ]
      ]
    },
    {
      "id": "sg_twdocs",
      "parent": "sg",
      "title": "台灣證件掃描要求說明",
      "short": "請參閱 MED TW、PP、SMB 掃描範例，並依上述命名規則，打包寄給承辦人。",
      "keywords": "MED TW PP SMB 體檢 護照 海員手冊 掃描 電子檔",
      "html": "\n<p>請點擊文件名稱閱覽相關注意事項。</p>\n<div class=\"error-list\">\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">01</span><span>MED TW（交通部體檢表）</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\">\n      <p>體檢表正反面皆需掃描，效期至少 8 個月。</p>\n      <img src=\"../assets_cer_renewal/docs/singapore/med-tw-sample.jpg\" alt=\"MED TW 範例\" data-full=../assets_cer_renewal/docs/singapore/med-tw-sample.jpg\">\n    </div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">02</span><span>PP（護照）</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\">\n      <p>護照需有簽名，並符合附件要求。</p>\n      <img src=\"../assets_cer_renewal/docs/singapore/pp-sample.jpg\" alt=\"PP 範例\" data-full=\"../assets_cer_renewal/docs/singapore/pp-sample.jpg\">\n    </div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">03</span><span>SMB（海員手冊）</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\">\n      <p>海員手冊需從第一頁掃描到資歷頁。</p>\n      <img src=\"../assets_cer_renewal/docs/singapore/smb-sample.jpg\" alt=\"SMB 範例\" data-full=\"../assets_cer_renewal/docs/singapore/smb-sample.jpg\">\n    </div>\n  </details>\n</div>\n",
      "imgs": []
    },
    {
      "id": "sg_certs",
      "parent": "sg",
      "title": "台灣證書與英文培訓證明",
      "short": "請參閱 TW GMDSS、TW COC 與各英文培訓證明掃描範例，並依上述命名規則，打包寄給承辦人。",
      "keywords": "TW GMDSS TW COC BASIC FIRE BOAT FIRST AID ECDIS BRM SSD ARPA",
      "html": "\n<p>請點選你要看的文件範例。</p>\n<div class=\"note\">BASIC／FIRE／BOAT／FIRST AID 的培訓日期須在 4 年 5 個月內；其餘仍請依附件要求送件。</div>\n<div class=\"error-list\">\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">01</span><span>TW GMDSS</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"../assets_cer_renewal/docs/singapore/tw-gmdss.jpg\" alt=\"TW GMDSS\" data-full=\"../assets_cer_renewal/docs/singapore/tw-gmdss.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">02</span><span>TW COC</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"../assets_cer_renewal/docs/singapore/tw-coc.jpg\" alt=\"TW COC\" data-full=\"../assets_cer_renewal/docs/singapore/tw-coc.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">03</span><span>BASIC</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"../assets_cer_renewal/docs/singapore/basic.jpg\" alt=\"BASIC\" data-full=\"../assets_cer_renewal/docs/singapore/basic.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">04</span><span>FIRE</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"../assets_cer_renewal/docs/singapore/fire.jpg\" alt=\"FIRE\" data-full=\"../assets_cer_renewal/docs/singapore/fire.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">05</span><span>BOAT</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"../assets_cer_renewal/docs/singapore/boat.jpg\" alt=\"BOAT\" data-full=\"../assets_cer_renewal/docs/singapore/boat.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">06</span><span>FIRST AID</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"../assets_cer_renewal/docs/singapore/first-aid.jpg\" alt=\"FIRST AID\" data-full=\"../assets_cer_renewal/docs/singapore/first-aid.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">07</span><span>ECDIS</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"../assets_cer_renewal/docs/singapore/ecdis.jpg\" alt=\"ECDIS\" data-full=\"../assets_cer_renewal/docs/singapore/ecdis.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">08</span><span>BRM</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"../assets_cer_renewal/docs/singapore/brm.jpg\" alt=\"BRM\" data-full=\"../assets_cer_renewal/docs/singapore/brm.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">09</span><span>SSD</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"../assets_cer_renewal/docs/singapore/ssd.jpg\" alt=\"SSD\" data-full=\"../assets_cer_renewal/docs/singapore/ssd.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">10</span><span>ARPA</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"../assets_cer_renewal/docs/singapore/arpa.jpg\" alt=\"ARPA\" data-full=\"../assets_cer_renewal/docs/singapore/arpa.jpg\"></div>\n  </details>\n</div>\n",
      "imgs": []
    },
    {
      "id": "sg_other",
      "parent": "sg",
      "title": "其他申請注意事項",
      "short": "備齊所有申請文件後，還有幾件事要注意。",
      "keywords": "非萬海 實習 船名 船籍 IMO Official No",
      "html": "<ul><li>若曾在其他航商船舶實習，附件要求在 e-mail 內文另提供英文船名、船籍、IMO No.、Official No.。</li><li>每項資料存成一個檔案後，備妥整包寄送承辦端。</li><li>後續仍需等待公司及新加坡端辦理與通知。</li></ul>",
      "imgs": [
        [
          "../assets_cer_renewal/docs/singapore/non-wanhai-internship.jpg",
          "曾在非萬海船實習注意事項"
        ]
      ]
    },

{
  "id": "sg_sash",
  "parent": "sg",
  "title": "SASH 小證｜上課與換證說明",
  "short": "新加坡 SASH 補差訓註冊、報名、上課、測驗及證書下載方式。",
  "keywords": "SASH 小證 新加坡 補差訓 性騷擾防治 反霸凌 MPA STEP Singapore Polytechnic SP PSSR CoC 線上課程 題庫 測驗 Final Assessment 電子證書",

  "html": `
    <div class="sash-guide">

      <div class="note">
        <strong>適用情況：</strong>
        自 2026 年 1 月 1 日起，申請換發或重新核發新加坡適任證書（CoC）時，
        須具備獨立 SASH 培訓證明，或完成已納入 SASH 內容之新版 PSSR 課程。
        現階段可透過 Singapore Polytechnic（SP）的 STEP E-Learning 完成補差訓。
      </div>


      <h3>一、註冊與課程申請</h3>

      <p>
        依序完成下列步驟；點開每一項即可查看操作說明與對應畫面。
      </p>


      <div class="error-list">

        <details class="error-item">
          <summary>
            <span class="error-no">01</span>
            <span>進入課程頁面並點選 Register</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              開啟 Singapore Polytechnic 的 SASH 課程頁面，
              確認課程名稱後，點選左下角
              <strong>Register</strong>。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_1.png"
              alt="SASH 步驟 1：課程首頁與 Register"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_1.png"
            >

          </div>
        </details>



        <details class="error-item">
          <summary>
            <span class="error-no">02</span>
            <span>進入 STEP 後點選 Apply</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              進入 STEP 課程申請頁面後，
              可先閱讀課程相關說明，再點選左下角
              <strong>Apply</strong>。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_2.png"
              alt="SASH 步驟 2：STEP 課程申請頁 Apply"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_2.png"
            >

          </div>
        </details>



        <details class="error-item">
          <summary>
            <span class="error-no">03</span>
            <span>新用戶點選 Sign in / Sign up</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              系統若顯示新用戶提示視窗，
              點選 <strong>Sign in / Sign up</strong>
              建立或登入帳號。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_3.png"
              alt="SASH 步驟 3：Sign in Sign up"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_3.png"
            >

          </div>
        </details>



        <details class="error-item">
          <summary>
            <span class="error-no">04</span>
            <span>選擇 Sign in with Singpass / Student ID</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              進入 STEP 登入頁面後，
              選擇
              <strong>Sign in with Singpass / Student ID</strong>。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_4.png"
              alt="SASH 步驟 4：Sign in with Singpass Student ID"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_4.png"
            >

          </div>
        </details>



        <details class="error-item">
          <summary>
            <span class="error-no">05</span>
            <span>使用 Email OTP 完成臨時登入</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              在 Singpass 選項下方點選
              <strong>Login with Email OTP</strong>，
              輸入 Email 後點選
              <strong>Send OTP</strong>，
              收到 OTP 碼後輸入並完成登入。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_5.png"
              alt="SASH 步驟 5：Login with Email OTP"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_5.png"
            >

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_6.png"
              alt="SASH 步驟 5：輸入 Email 與 OTP"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_6.png"
            >

          </div>
        </details>



        <details class="error-item">
          <summary>
            <span class="error-no">06</span>
            <span>首次登入後更新個人資料</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              臨時登入後需先填寫個人資料，
              選擇頁面下方的
              <strong>manually update</strong>。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_7.png"
              alt="SASH 步驟 6：manually update 個人資料"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_7.png"
            >

          </div>
        </details>



        <details class="error-item">
          <summary>
            <span class="error-no">07</span>
            <span>外籍學員填寫 Foreigner / Others</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              填寫所有紅色星號欄位；
              <strong>Citizenship type</strong>
              選擇
              <strong>Foreigner</strong>，
              <strong>Pass type</strong>
              選擇
              <strong>Others</strong>。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_8.png"
              alt="SASH 步驟 7：Foreigner Others 個人資料設定"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_8.png"
            >

          </div>
        </details>



        <details class="error-item">
          <summary>
            <span class="error-no">08</span>
            <span>回到課程頁再次點選 Apply</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              確認右上角已顯示登入身分後，
              重新回到本課程的 STEP 申請頁面，
              再次點選
              <strong>Apply</strong>
              申請課程。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_9.png"
              alt="SASH 步驟 8：回到課程頁再次 Apply"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_9.png"
            >

          </div>
        </details>

      </div>



      <h3>二、課程申請、付款與 Student ID</h3>

      <div class="error-list">

        <details class="error-item">
          <summary>
            <span class="error-no">09</span>
            <span>上傳護照個人資料頁</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              因非新加坡公民，
              申請流程前兩個上傳文件的步驟，
              皆依附件案例上傳
              <strong>護照個人資料頁</strong>。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_10.png"
              alt="SASH 步驟 9：護照資料上傳"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_10.png"
            >

          </div>
        </details>



        <details class="error-item">
          <summary>
            <span class="error-no">10</span>
            <span>完成付款並留意 Email 通知</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              完成文件上傳後進入付款程序，
              可選擇頁面提供的付款方式。
              STEP 會寄送付款通知 Email，
              請依通知於申請當日完成付款以保留參訓名額；
              付款完成後亦會收到通知。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_11.png"
              alt="SASH 步驟 10：付款方式與 Email 通知"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_11.png"
            >

          </div>
        </details>



        <details class="error-item">
          <summary>
            <span class="error-no">11</span>
            <span>取得 Student ID 並完成帳號設定</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              付款後等待 STEP 審核。
              審核完成後會以 Email 寄送
              <strong>Student ID</strong>，
              再依信件指示設定登入密碼與手機認證。
              之後即可使用 Student ID 登入 STEP。
            </p>

            <p>
              <strong>附件案例：</strong>
              平日下午 4:30 完成付款，
              晚上 7:30 收到 Student ID，
              審核約 3 小時；
              實際時間仍以 STEP 審核為準。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_12.png"
              alt="SASH 步驟 11：Student ID 與帳號設定"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_12.png"
            >

          </div>
        </details>

      </div>



      <h3>三、登入 STEP 與開始上課</h3>

      <div class="error-list">

        <details class="error-item">
          <summary>
            <span class="error-no">12</span>
            <span>使用 Student ID 登入 STEP</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              取得 Student ID 並完成密碼與手機認證後，
              於登入頁面切換至
              <strong>Student ID</strong>，
              輸入帳號登入。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_13.png"
              alt="SASH 步驟 12：Student ID 登入 STEP"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_13.png"
            >

          </div>
        </details>



        <details class="error-item">
          <summary>
            <span class="error-no">13</span>
            <span>從 My course 開啟 SASH 課程</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              登入後點選左側
              <strong>My course</strong>，
              右側會出現已選課程；
              點選 SASH 課程的連結標誌，
              頁面跳轉後再選擇 STEP 圖示進入課程。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_14.png"
              alt="SASH 步驟 13：My course 與課程連結"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_14.png"
            >

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_15.png"
              alt="SASH 步驟 13：STEP 課程首頁"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_15.png"
            >

          </div>
        </details>



        <details class="error-item">
          <summary>
            <span class="error-no">14</span>
            <span>開始課程並確認通過條件</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              點選課程圖示開始學習。
              課程開始前會顯示本次課程的完成與通過條件。
            </p>

            <div class="scroll">

              <table>

                <thead>
                  <tr>
                    <th>項目</th>
                    <th>說明</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>上課方式</td>
                    <td>
                      非同步線上課程，可依自己的時間與步調進行學習。
                    </td>
                  </tr>

                  <tr>
                    <td>課程時間</td>
                    <td>
                      課程設計約 4 小時；
                      附件案例實際完整觀看約 3.5～4 小時。
                    </td>
                  </tr>

                  <tr>
                    <td>課程內容</td>
                    <td>
                      共 3 個 Unit；
                      全部完成後進入 Final Assessment。
                    </td>
                  </tr>

                  <tr>
                    <td>Unit 小測驗</td>
                    <td>
                      每個 Unit 最後皆有小測驗，
                      通過標準為
                      <strong>100 分</strong>，
                      可多次嘗試直到通過。
                    </td>
                  </tr>

                  <tr>
                    <td>Final Assessment</td>
                    <td>
                      共
                      <strong>20 題選擇題</strong>，
                      一頁一題，每題 5 分，
                      <strong>60 分及格</strong>。
                    </td>
                  </tr>

                  <tr>
                    <td>考試機會</td>
                    <td>
                      Final Assessment 共
                      <strong>2 次</strong>；
                      兩次皆未及格則不予發證，
                      須重新付費報名課程。
                    </td>
                  </tr>

                  <tr>
                    <td>電子證書</td>
                    <td>
                      Final Assessment 完成後約一週，
                      可於 STEP 網站下載電子證書。
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_16.png"
              alt="SASH 步驟 14：開始課程與通過條件"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_16.png"
            >

          </div>
        </details>

      </div>



      <h3>四、上課期間注意事項</h3>

      <div class="error-list">

        <details class="error-item">
          <summary>
            <span class="error-no">15</span>
            <span>上傳個人大頭照供發證使用</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              登入 STEP 後，
              點選右上角頭像進入個人資料頁，
              記得上傳個人大頭照，
              供後續發證使用。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_17.png"
              alt="SASH 步驟 15：上傳發證照片"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_17.png"
            >

          </div>
        </details>



        <details class="error-item">
          <summary>
            <span class="error-no">16</span>
            <span>依序完成 3 個 Unit、共 25 個 Lesson</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              課程可從左側章節列表選擇要學習或複習的內容；
              全部共有
              <strong>3 個 Unit、25 個 Lesson</strong>，
              須完成前一個 Unit 後才能進入下一個 Unit。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_18.png"
              alt="SASH 步驟 16：Unit 與 Lesson 課程內容"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_18.png"
            >

          </div>
        </details>



        <details class="error-item">
          <summary>
            <span class="error-no">17</span>
            <span>觀看外部影片與下載課程資料</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              除系統內影片外，
              課程亦包含外部連結影片及可下載資料。
              系統內影片可加速播放，
              也可將語音轉為文字稿閱讀。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_19.png"
              alt="SASH 步驟 17：外部影片與教材下載"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_19.png"
            >

          </div>
        </details>



        <details class="error-item">
          <summary>
            <span class="error-no">18</span>
            <span>互動式內容與課程小遊戲</span>
            <span class="error-arrow">⌄</span>
          </summary>

          <div class="error-preview">

            <p>
              課程中包含互動式小遊戲與圖文內容，
              可搭配各 Unit 小測驗複習。
              小測驗與 Final Assessment 題型相近，
              建議先確實理解各 Unit 內容再進行最終評估。
            </p>

            <img
              src="../assets_cer_renewal/docs/singapore/sash/SASH_20.png"
              alt="SASH 步驟 18：互動式學習內容與小遊戲"
              data-full="../assets_cer_renewal/docs/singapore/sash/SASH_20.png"
            >

          </div>
        </details>

      </div>

      <h3>五、SASH 題庫下載</h3>

      <div class="downloads">
        <div class="drow">
          <div>
            <h4>SASH 課程與測驗題庫</h4>
            <p>
              各 Unit 課程測驗題目
            </p>
          </div>

          <a
            class="download-btn"
            href="../assets_cer_renewal/docs/singapore/SASH_Lesson Quiz.pdf"
            download
          >
            SASH Lesson Quiz
          </a>
        </div>

        <div class="drow">
          <div>
            <h4>SASH 課程與測驗題庫</h4>
            <p>
              Final Assessment 題目，供上課前後複習使用。
            </p>
          </div>

          <a
            class="download-btn"
            href="../assets_cer_renewal/docs/singapore/SASH_Final Assessment.pdf"
            download
          >
            Final Assessment 題目
          </a>
        </div>

      </div>


      <div class="notice-box">
        <p>
          <strong>提醒：</strong>
          題庫僅供課程複習使用，Final Assessment 的答案請依課程內容自行判斷。
        </p>
      </div>

    </div>
  `,
  "imgs": []
},
    {
  "id": "sg_download",
  "parent": "sg",
  "title": "空白表單下載",
  "short": "下載 SBTA 與 IMDA GMDSS 空白表單。",
  "keywords": "空白表單 下載 SBTA IMDA",
  "html": `
    <div class="downloads">

      <div class="drow">
        <div>
          <h4>Application Form-SBTA</h4>
          <p>空白 PDF 表單</p>
        </div>
        <a
          class="download-btn"
          href="../assets_cer_renewal/docs/singapore/Application Form-SBTA.pdf"
          download
        >
          點擊下載表單
        </a>
      </div>

      <div class="drow">
        <div>
          <h4>IMDA GMDSS Form</h4>
          <p>空白 PDF 表單</p>
        </div>
        <a
          class="download-btn"
          href="../assets_cer_renewal/docs/singapore/IMDA GMDSS form.pdf"
          download
        >
          點擊下載表單
        </a>
      </div>

    </div>
  `,
  "imgs": []
},
  ]
};
