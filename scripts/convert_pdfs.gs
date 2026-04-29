function convertLessonDocsToPDFs() {
  // === Add as many folder IDs as you need ===
  // const FOLDER_IDS = [
  //   '12IhPgArI2x39M18Hr9l-CacCZpNNHzIj',//l1
  //   '1_6SRkL33QDO5Q60bBLmNQstp-3AgiZMb',//l2
  //   '1xnBz9r8X-eXAu0pgWE3K5FnIqkHnEp-R',//l3
  //   '1PxnKyVxmu9uvJBOtPSYWuiS99t0Kkht0',//l4
  //   '1P5WApN0brIBASpEcoMpXgzB8O42KvsHI',//l5
  //   '1N0Nxdv5FyHAD7sP1mrZj-2Dw8nRQ1gg1',//l6
  //   '1DhY2tPkgYdrP3_HHOR6OiEZPCo6n8_jJ',//l7
  //   '1rqbFD9eSzoIkuw3JwFbXv0Bfjhbr_MXL',//l8
  //   '1Wav-5M5zM067qiHE5yuaSrd_F5yQpYJt',//l9
  //   '1w8bzcsXffFdne6YkaRe7IhhTiju6W1ZG'//l10
  // ];
  const FOLDER_IDS = [
    '1lhwEIjiRPkyCMi9cem3D323y092QkDqR',//l11
    '1MtoIRuTcOIpS_3mPoKhfVEhVzp4ZwDXp',//l12
    '1kmPtPR0uUFPzBjASmh96QqHyh_AuihOb',//l13
    '166XzksqlhQ40UqogpoZbnjodTceAuuNW',//l14
    '1jsvww2RWbYRxb352cCLRwN2BMaO1BpnU',//l15
    '1Ls2B3da98iHRK0PVjXi4lN0WQTaTKY9d',//l16
    '1vwt8uuiKhM4ohYg5rTGcraUtpFvu25aY',//l17
    '1BhTkELaLKVFUZvr3aX2Y3VRDnBQ7ICVk',//l18
    '1dGLpmXx0bafTyDsLjjCfff34Q3DyMdXS',//l19
    '1YfNYQcrS9R3GS77_qcJSEdCa5nPj-nQc'//l20
  ]

  const regex = /_page\d+$/i;

  FOLDER_IDS.forEach((folderId, idx) => {
    Logger.log(`=== Processing folder ${idx + 1}/${FOLDER_IDS.length}: ${folderId} ===`);

    const folder = DriveApp.getFolderById(folderId);
    const files = folder.getFiles();

    while (files.hasNext()) {
      const file = files.next();
      const name = file.getName();

      // Only convert Google Docs with matching name format
      if (file.getMimeType() === MimeType.GOOGLE_DOCS && regex.test(name)) {
        try {
          Logger.log("Converting: " + name);
          const pdfBlob = file.getAs(MimeType.PDF);
          folder.createFile(pdfBlob.setName(name + ".pdf"));
        } catch (e) {
          Logger.log(`ERROR converting ${name}: ${e}`);
        }
      }
    }
  });

  Logger.log("All PDF conversions completed.");
}
