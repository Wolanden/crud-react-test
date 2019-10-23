import React from 'react'
import { Album } from '../../models/Album'

interface Props{
    albums: Album[]
}

const AlbumIndex: React.FC<Props> = (props) =>{
    return (
        <table>
            <thead></thead>
            <tbody></tbody>
        </table>
    )
}

export default AlbumIndex