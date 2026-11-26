let nama = [
    "Ashley Aurellia Nomi Putri",
    "Anisa Istikoma",
    "Alyani Rofiyah",
    "Bunga Sasi Kirana",
    "Bunia Asyirotul Karimah",
    "Della Agustina Widiyani",
    "Diandra Kayla Aramita",
    "Dewi Afifatu Zuhro",
    "M. Zainul Haqi",
    "Ikhzan Gunawan",
    "Lucky Adi Irawan"
];

console.log("DAFTAR NAMA SHIFT 1");

nama.forEach((orang, index) => {
    if (index === 3) {
        return;
    }
    console.log("Index " + index + " = " + orang);
});