<!-- Nama : Winnerson Laia
NIM : 121140121
Kelas di siakad : RB
Kelas praktikum : RB -->

<?php

class Manusia{
    private $nama;
    private $umur;

    public function __construct($nama, $umur) {
        $this->nama = $nama;
        $this->umur = $umur;
        echo "Objek Manusia telah berhasil dibuat<br>";
    }

    public function tampilkan_data(){
        echo "Nama : ".$this->nama. "<br>". "Umur : ". $this->umur. "<br>";
    }
}

class Mahasiswa extends Manusia{
    private $nim;

    public function __construct($nama, $umur, $nim) {
        parent::__construct($nama, $umur);
        $this->nim = $nim;
        echo "Objek Mahasiswa telah berhasil dibuat<br>";
    }
}

$Manusia = new Manusia("Winner", 20);
$Mahasiswa = new Mahasiswa("Winner", 20, 121140121);


?>
