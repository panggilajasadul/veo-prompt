async function generatePrompt() {
  const subjek = document.getElementById("subjek").value;
  const aksi = document.getElementById("aksi").value;
  const tempat = document.getElementById("tempat").value;
  const detail = document.getElementById("detailTambahan").value;

  const idn = `Seekor ${subjek} sedang ${aksi} ${tempat}. Detail: ${detail}.`;
  document.getElementById("promptID").value = idn;

  const eng = await translatePrompt(idn);
  document.getElementById("promptEN").value = eng;

  // ✅ Simpan ke Firestore (posisi yang benar)
  db.collection("prompts").add({
    waktu: new Date().toLocaleString(),
    prompt_idn: idn,
    prompt_eng: eng
  })
  .then(() => {
    console.log("✅ Prompt disimpan ke Firestore");
  })
  .catch((error) => {
    console.error("❌ Gagal menyimpan:", error);
  });
}
