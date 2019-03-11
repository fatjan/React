import React, { Component } from 'react';

class Table extends Component {
    render() {
      return (
                <table>
                    <tr>
                        <td>
                            <a href="#"  style={{marginRight:"80px"}}>Berita Terkini </a> 
                            <a href="#" >Lihat Semua </a>  
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="tombol"> # 1 </button> <br/>
                            Gabung Alpha Tech Academy sekarang!
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button className="tombol"> # 2 </button> <br/>
                            Ada apa antara Korban dan Hasan? 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button className="tombol"> # 3 </button> <br/>
                            Mengenal Arafat sang Master Python. 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button className="tombol"> # 4 </button> <br/>
                            Belajar reactJS it seru. Kamu setuju? 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button className="tombol"> # 5 </button> <br/>
                            Sudahkah kamu sehat mental?
                        </td>
                    </tr>
                </table>
     
        );
    }
}

export default Table;