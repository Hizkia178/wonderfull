function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        // Menambahkan event listener untuk semua tautan di nav-links
            document.querySelectorAll('.nav-links a').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault(); // Menghentikan perilaku default

                    const targetId = this.getAttribute('href'); // Mendapatkan ID target dari href
                    const targetElement = document.querySelector(targetId); // Mencari elemen target

                    if (targetElement) {
                        // Melakukan scroll ke elemen target
                        targetElement.scrollIntoView({
                            behavior: 'smooth', // Efek scroll yang halus
                            block: 'start' // Mengatur posisi scroll ke atas elemen
                        });
                    }
                });
            });