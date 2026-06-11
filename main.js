
    const text   = "Estudante de Análise e Desenvolvimento de Sistemas, apaixonada por tecnologia e inovação.";
    const target = document.getElementById("typed");
    const cursor = document.getElementById("cursor");
    let i = 0;
 
    function type() {
      if (i < text.length) {
        target.textContent += text.charAt(i++);
        setTimeout(type, 38);
      } else {
        setTimeout(() => {
          cursor.style.animation = "none";
          cursor.style.opacity   = "0";
        }, 1400);
      }
    }

    setTimeout(type, 700);