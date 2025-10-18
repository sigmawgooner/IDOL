const input = document.getElementById("input");
const messages = document.getElementById("messages");

input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter" && input.value.trim()) {
    const msg = input.value.trim();
    input.value = "";
    addMessage("You", msg);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg }),
    });

    const data = await res.json();
    addMessage("ANIBLOCK", data.reply);
  }
});

function addMessage(sender, text) {
  const el = document.createElement("p");
  el.innerHTML = `<b>${sender}:</b> ${text}`;
  messages.appendChild(el);
  messages.scrollTop = messages.scrollHeight;
}
