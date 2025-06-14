async function generatePrompt() {
  const subjek = document.getElementById("subjek").value;
  const aksi = document.getElementById("aksi").value;
  const tempat = document.getElementById("tempat").value;
  const detail = document.getElementById("detailTambahan").value;

  const idn = `Seekor ${subjek} sedang ${aksi} ${tempat}. Detail: ${detail}.`;
  document.getElementById("promptID").value = idn;

  const eng = await translatePrompt(idn);
  document.getElementById("promptEN").value = eng;
}

async function translatePrompt(teks) {
  const res = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: teks,
      source: "id",
      target: "en",
      format: "text"
    })
  });

  const data = await res.json();
  return data.translatedText || "Gagal menerjemahkan.";
}

function copyPrompt(id) {
  const text = document.getElementById(id);
  text.select();
  navigator.clipboard.writeText(text.value);
  alert("Prompt disalin!");
}
