import React from 'react'
import { useDropzone } from 'react-dropzone'
import { CgFileDocument } from 'react-icons/cg'
import { Button, Input } from 'reactstrap'

const DragDropBox = ({ onFileDrop }) => {
    const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
        onDrop: (acceptedFiles) => {
            onFileDrop(acceptedFiles[0])
        }
    })

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ))

    return (
        <section className='drag-drop-container'>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
                <ul>{files}</ul>
            </aside>
        </section>
    )
}

export default DragDropBox
