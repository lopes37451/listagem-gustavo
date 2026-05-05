import { useState } from "react"
import './Listagem.css'

export default function Listagem() {

    return (
        <>
            <main>
        <h1>Listagem</h1>

        <table border="1">
            <tr>
                <td>Nome</td>
                <td>Email</td>
                <td>Senha</td>
                <td>Editar</td>
                <td>Excluir</td>
            </tr>

            <tr>
                <td>Thalita</td>
                <td>thalitaoliveira@gmail.com</td>
                <td>987654321</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Jose</td>
                <td>laurabrilhante@gmail.com</td>
                <td>123456789</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Mariane</td>
                <td>mariane23@gmail.com</td>
                <td>3724625273</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Justin</td>
                <td>justinbieber@gmail.com</td>
                <td>21062008</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

        </table>

    </main>

        </>
    )
}