document.querySelectorAll('.btnDetail').forEach(items => {
    items.addEventListener('click', function (e) {
        let parent = e.target.parentElement.parentNode.parentNode;
        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>Deskripsi tidak tersedia</i>';
        console.log(`gambar : ${gambar}`);
        console.log(`harga : ${harga}`);
        console.log(`judul : ${judul}`);
        console.log(`deskripsi : ${deskripsi}`);


        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        const nohp = '6285387414554'
        let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo%20Admin%20Saya%20Ingin%20Membeli%20Produk%20Ini%0A%0A*Nama%20Produk*%3A%20${judul}%0A*Harga*%3A%20${harga}`;

        document.querySelector('.btnBeli').href = pesan;
        // let judul = document.querySelector('.card-title');
        // let penulis = document.querySelector('.penulis');
        // let penerbit = document.querySelector('.penerbit');
        // let harga = document.querySelector('.harga');
    });
});


// document.querySelectorAll('.harga');

