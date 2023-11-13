import React from 'react'
import { useDropzone } from 'react-dropzone'
import { CgFileDocument } from 'react-icons/cg'
import { Button, Input } from 'reactstrap'

const DragDropBox = ({ props }) => {
    const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone()

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ))

    return (
        <section className='container'>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
        </section>
    )
}

export default DragDropBox
