const host = "https://panel.renzzxd.my.id"
const application = {
    api_key: "ptla_pA38xn484GfHvAjydZeu8w5FJ1yzWJKpf3yF12LfmAg", //Ambil di panel lu || caranya pergi ke setting admin lalu klik garis tiga di pojok kiri atas lalu klik Application API tinggal salin dehh
    c_api_key: "ptlc_ku9Um4WPavNxrgb9Q4WbeMU4xulM47MWx6ZE6FKpeid" //Ambil di panel lu || caranya pergi ke Account Setting atau klik avatar akun lalu klik API Credentials lalu isi DESCRIPTION isinya bebas lalu klik CREATE
}
const serverCreate = {
    nestId: "1", //Nest Id panel lu
    eggId: " 15", //Egg Id panel lu
    limits: {
      db: "1", //Mending ga usah diganti
      backups: "1", //Mending ga usah diganti
      allocation: "0" //Mending ga usah diganti
    },
    eggs: {
      environment: {
        "STARTUP_CMD": "npm start", // Sesuai in sama egg lu
        "SECOND_CMD": "npm start"
      }
    }
}

module.exports = { host, application, serverCreate }