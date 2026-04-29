// ====== TEMPLATE IDS (shared across all jobs) ======
const TITLE_1 = '1EpMLlAgrZsv-GI82qzkLFXLABRVpIk7Uum6d_QmFTJU';
const TITLE_2 = '1-yhT4MRyveBUzzuxVobcYWZfWoDvWtVFIym2swyS7Co';
const TITLE = '15JPXJ_ndRoxiah3gdDoncVVdV8kF-W0lLCfwyO5H8q4';

const TITLE_TEMPLATE_ID = TITLE; // first page template
const FILLER_TEMPLATE_ID = '1EGVSGKrNgH4GwFENffKLwIGfw55RaGIakAPbivChAWc'; // subsequent pages

// ====== JOBS: up to 20 ======
// Each job: { folderId: string, charOrder: string, headerReplacements?: object }
const CONFIGS = [
  {//l1
    folderId: '12IhPgArI2x39M18Hr9l-CacCZpNNHzIj',
    charOrder: '辆研究弓内全较省由处拉柯林',
    headerReplacements: {}
  },
  {//l2
    folderId: '1_6SRkL33QDO5Q60bBLmNQstp-3AgiZMb',
    charOrder: '屋摆毯柜挂门调栋旧恐品层般着急',
    headerReplacements: {}
  },
  {//l3
    folderId: '1xnBz9r8X-eXAu0pgWE3K5FnIqkHnEp-R',
    charOrder: '留鸡蒸芥兰嫩菠鲜淡咸油巾筷各虑主微丽莎梅杭川湖',
    headerReplacements: {}
  },
  {//l4
    folderId: '1PxnKyVxmu9uvJBOtPSYWuiS99t0Kkht0',
    charOrder: '恤仔无论需牙膏粉购价纯棉髦质量标乎税',
    headerReplacements: {}
  },
  {//l5
    folderId: '1P5WApN0brIBASpEcoMpXgzB8O42KvsHI',
    charOrder: '选世界历史其章轻松授讨碰毕济决解建议管谈将挣融数交哲申',
    headerReplacements: {}
  },
  {//l6
    folderId: '1N0Nxdv5FyHAD7sP1mrZj-2Dw8nRQ1gg1',
    charOrder: '朗迷相底背景根陪答原虎停歉态度丢三钥匙',
    headerReplacements: {}
  },
  {//l7
    folderId: '1DhY2tPkgYdrP3_HHOR6OiEZPCo6n8_jJ',
    charOrder: '络闻资戏博载软结杂志垃圾落伍食迟害敢待瘾严代助翻译免',
    headerReplacements: {}
  },
  {//l8
    folderId: '1rqbFD9eSzoIkuw3JwFbXv0Bfjhbr_MXL',
    charOrder: '良育存入供减负响庭取验零奖府贷款农村低遛猫读借欠银怪乖',
    headerReplacements: {}
  },
  {//l9
    folderId: '1Wav-5M5zM067qiHE5yuaSrd_F5yQpYJt',
    charOrder: '移士设嫂硕婚幸福厉侄排钢琴画怨尊择反童龙凤番墨',
    headerReplacements: {}
  },
  {//l10
    folderId: '1w8bzcsXffFdne6YkaRe7IhhTiju6W1ZG',
    charOrder: '乡火船风河流部山漠条形积倍挤季族哈尔滨疆江津深圳云',
    headerReplacements: {}
  },
  {//l11
    folderId: '1lhwEIjiRPkyCMi9cem3D323y092QkDqR',
    charOrder: '舅区环境夕墙贴倒奇酒举顺利剩浪余传统粽饼团宵嘛拜恭财闹鞭炮端恩',
    headerReplacements: {}
  },
  {//l12
    folderId: '1MtoIRuTcOIpS_3mPoKhfVEhVzp4ZwDXp',
    charOrder: '变及街盖骑装筑尝句尽厦座声咕噜夫庙',
    headerReplacements: {}
  },
  {//l13
    folderId: '1kmPtPR0uUFPzBjASmh96QqHyh_AuihOb',
    charOrder: '享参括通硬铺厢顿盒幽默俗惯览石树讲故塔纪万笼昆',
    headerReplacements: {}
  },
  {//l14
    folderId: '166XzksqlhQ40UqogpoZbnjodTceAuuNW',
    charOrder: '与妻退必散锻炼拳晨瑜伽注于肥随即使营饱科须吸烟熬补充眠熊',
    headerReplacements: {}
  },
  {//l15
    folderId: '1jsvww2RWbYRxb352cCLRwN2BMaO1BpnU',
    charOrder: '妇情况逐渐改革企厂酬性丈互模范队厌骄傲输绩职薪消赢冠军乒乓德',
    headerReplacements: {}
  },
  {//l16
    folderId: '1Ls2B3da98iHRK0PVjXi4lN0WQTaTKY9d',
    charOrder: '源爬益段推雾霾筒扔阳板煤规温赞汗砍塑袋污染造克摄氏',
    headerReplacements: {}
  },
  {//l17
    folderId: '1vwt8uuiKhM4ohYg5rTGcraUtpFvu25aY',
    charOrder: '俭投涨炒股引姑矛盾郁闷孙未劝辛苦增突义赚抵跌赔',
    headerReplacements: {}
  },
  {//l18
    folderId: '1BhTkELaLKVFUZvr3aX2Y3VRDnBQ7ICVk',
    charOrder: '之观朝伟展皇帝贡献修杀宫殿坟墓兵俑丝绸贸诗达技术曾指领命立孔秦唐宋华',
    headerReplacements: {}
  },
  {//l19
    folderId: '1dGLpmXx0bafTyDsLjjCfff34Q3DyMdXS',
    charOrder: '跨归龟满销湿总肃吓释阴寄既产晴缺善优握',
    headerReplacements: {}
  },
  {//l20
    folderId: '1YfNYQcrS9R3GS77_qcJSEdCa5nPj-nQc',
    charOrder: '聚庆饯锅池剧搞熟稳永联谊欧洲',
    headerReplacements: {}
  }
];

// ====== CONSTANTS ======
const CHARS_PER_PAGE = 4;
const MAX_STROKES_ON_TEMPLATE = 13;

// ====== ENTRY POINT ======
function runAllCharacterWorkbookJobs() {
  CONFIGS.forEach((job, idx) => {
    Logger.log(`=== Running job ${idx + 1}/${CONFIGS.length} for folder ${job.folderId} ===`);
    fillCharacterWorkbookTemplate(job.folderId, job.charOrder, job.headerReplacements || {});
  });
  Logger.log('All jobs complete.');
}

// ====== CORE WORKER ======
function fillCharacterWorkbookTemplate(folderId, charOrder, headerReplacements) {
  const rootFolder = DriveApp.getFolderById(folderId);
  const folderName = rootFolder.getName();

  // Auto-fill lesson_name and text_vocab if not provided
  if (!headerReplacements['{{lesson_name}}']) {
    headerReplacements['{{lesson_name}}'] = folderName;
  }
  if (!headerReplacements['{{text_vocab}}']) {
    headerReplacements['{{text_vocab}}'] = charOrder;
  }

  // Make an array of characters in the specified order
  const chars = Array.from(charOrder || '').filter(c => c && c.trim().length > 0);

  for (let i = 0; i < chars.length; i += CHARS_PER_PAGE) {
    const chunk = chars.slice(i, i + CHARS_PER_PAGE);
    const templateId = i === 0 ? TITLE_TEMPLATE_ID : FILLER_TEMPLATE_ID;

    // Use folder name in the filename so different jobs won’t collide
    const copy = DriveApp.getFileById(templateId).makeCopy(
      `${folderName}_page${Math.floor(i / CHARS_PER_PAGE) + 1}`,
      rootFolder
    );
    const doc = DocumentApp.openById(copy.getId());
    const body = doc.getBody();

    // Replace headers
    for (const [key, val] of Object.entries(headerReplacements)) {
      safeReplaceText(body, key, val);
    }

    // Process each character on this page
    for (let j = 0; j < chunk.length; j++) {
      const char = chunk[j];
      Logger.log(`Processing character: ${char}`);

      // Find character subfolder
      const folderIter = rootFolder.getFoldersByName(char);
      if (!folderIter.hasNext()) {
        Logger.log(`ERROR: No folder found for character "${char}" inside ${folderName}`);
        // Clean placeholders if present, to avoid leaving tags
        replaceSingleMatch(body, '{{py}}', '');
        replaceSingleMatch(body, '{{def}}', '');
        deleteAllTags(body, '{{char}}');
        for (let s = 1; s <= MAX_STROKES_ON_TEMPLATE; s++) {
          deleteAllTags(body, `{{strokes_${String(s).padStart(2, '0')}}}`);
        }
        continue;
      }
      const charFolder = folderIter.next();

      // Read info.txt
      const info = readInfoTxt(charFolder);
      if (!info) {
        Logger.log(`ERROR: info.txt missing or unreadable for "${char}"`);
      }
      const py = (info && info.pinyin) || '';
      const def = (info && info.definition) || '';

      // Gather stroke images 1.png ... N.png
      const strokeImages = getStrokeImages(charFolder);
      const charImage = strokeImages.length ? strokeImages[strokeImages.length - 1] : null;

      // Replace placeholders
      replaceSingleMatch(body, '{{py}}', py);
      replaceSingleMatch(body, '{{def}}', def);

      // Insert main char image
      const charMatch = body.findText('{{char}}');
      if (charMatch && charImage) {
        const textElem = charMatch.getElement();
        const startOffset = charMatch.getStartOffset();
        const endOffset = charMatch.getEndOffsetInclusive();
        textElem.asText().deleteText(startOffset, endOffset);
        const inserted = textElem.getParent().insertInlineImage(startOffset, charImage);
        inserted.setWidth(94).setHeight(94);
        Logger.log(`Inserted main image for ${char}`);
      } else if (charMatch) {
        // remove tag if no image available
        charMatch.getElement().asText().deleteText(charMatch.getStartOffset(), charMatch.getEndOffsetInclusive());
      }

      // Insert up to MAX_STROKES_ON_TEMPLATE stroke images
      for (let s = 0; s < MAX_STROKES_ON_TEMPLATE; s++) {
        const tag = `{{strokes_${String(s + 1).padStart(2, '0')}}}`;
        const foundStroke = body.findText(tag);
        if (!foundStroke) {
          // Template might not have all slots; just continue.
          continue;
        }

        const textElem = foundStroke.getElement().asText();
        const startOffset = foundStroke.getStartOffset();
        const endOffset = foundStroke.getEndOffsetInclusive();
        textElem.deleteText(startOffset, endOffset);

        if (strokeImages[s]) {
          const inserted = textElem.getParent().insertInlineImage(startOffset, strokeImages[s]);
          inserted.setWidth(46).setHeight(46);
          Logger.log(`Inserted stroke ${s + 1} for ${char}`);
        }
      }
    }

    // Cleanup any leftover tags
    const cleanupTags = ['{{py}}', '{{def}}', '{{char}}'];
    for (let k = 1; k <= MAX_STROKES_ON_TEMPLATE; k++) {
      cleanupTags.push(`{{strokes_${String(k).padStart(2, '0')}}}`);
    }
    cleanupTags.forEach(tag => deleteAllTags(body, tag));

    doc.saveAndClose();
    Logger.log('Created document: ' + doc.getUrl());
  }
}

function runFromL7() {
  runCharacterWorkbookJobsFrom("1DhY2tPkgYdrP3_HHOR6OiEZPCo6n8_jJ");
}

function runCharacterWorkbookJobsFrom(folderId) {
  // Find the index of the given folderId in CONFIGS
  const startIndex = CONFIGS.findIndex(job => job.folderId === folderId);

  if (startIndex === -1) {
    Logger.log(`ERROR: folderId "${folderId}" not found in CONFIGS.`);
    return;
  }

  Logger.log(`=== Starting from job ${startIndex + 1}/${CONFIGS.length}, folder ${folderId} ===`);

  for (let idx = startIndex; idx < CONFIGS.length; idx++) {
    const job = CONFIGS[idx];
    try {
      Logger.log(`--- Running job ${idx + 1}/${CONFIGS.length} for folder ${job.folderId} ---`);
      fillCharacterWorkbookTemplate(job.folderId, job.charOrder, job.headerReplacements || {});
    } catch (err) {
      Logger.log(`FATAL in job ${idx + 1} (${job.folderId}): ${err}`);
    }
  }

  Logger.log('All remaining jobs complete.');
}


// ====== HELPERS ======
function safeReplaceText(body, key, value) {
  let m = body.findText(key);
  while (m) {
    const el = m.getElement().asText();
    el.deleteText(m.getStartOffset(), m.getEndOffsetInclusive());
    el.insertText(m.getStartOffset(), String(value));
    m = body.findText(key);
  }
}

function replaceSingleMatch(body, tag, text) {
  const match = body.findText(tag);
  if (!match) return;
  const el = match.getElement().asText();
  el.deleteText(match.getStartOffset(), match.getEndOffsetInclusive());
  el.insertText(match.getStartOffset(), String(text));
}

function deleteAllTags(body, tag) {
  let match = body.findText(tag);
  while (match) {
    match.getElement().asText().deleteText(match.getStartOffset(), match.getEndOffsetInclusive());
    match = body.findText(tag);
  }
}

// Reads info.txt from the character folder and returns { character, pinyin, definition } or null
function readInfoTxt(charFolder) {
  let infoFile = null;
  // Prefer exact "info.txt"
  const byName = charFolder.getFilesByName('info.txt');
  if (byName.hasNext()) {
    infoFile = byName.next();
  } else {
    // Fallback: any .txt file
    const files = charFolder.getFiles();
    while (files.hasNext()) {
      const f = files.next();
      if (String(f.getName()).toLowerCase().endsWith('.txt')) {
        infoFile = f;
        break;
      }
    }
  }
  if (!infoFile) return null;

  try {
    const text = infoFile.getBlob().getDataAsString('UTF-8');
    const lines = text.split(/\r?\n/).map(s => s.trim());
    const out = { character: '', pinyin: '', definition: '' };
    lines.forEach(line => {
      if (line.startsWith('Character:')) {
        out.character = line.substring('Character:'.length).trim();
      } else if (line.startsWith('Pinyin:')) {
        out.pinyin = line.substring('Pinyin:'.length).trim();
      } else if (line.startsWith('Definition:')) {
        out.definition = line.substring('Definition:'.length).trim();
      }
    });
    return out;
  } catch (e) {
    Logger.log('ERROR reading info.txt: ' + e);
    return null;
  }
}

// Returns an array of blobs sorted by numeric filename: 1.png, 2.png, ..., N.png
function getStrokeImages(charFolder) {
  const images = [];
  const files = charFolder.getFiles();
  while (files.hasNext()) {
    const f = files.next();
    const name = f.getName();
    const m = name.match(/^(\d+)\.png$/i);
    if (m) {
      const idx = parseInt(m[1], 10);
      images[idx - 1] = f.getBlob();
    }
  }
  // Compact any holes while preserving order
  return images.filter(Boolean);
}