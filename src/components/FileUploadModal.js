import React, { useState } from 'react'
import Select from 'react-select'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const uploadOptions = [
    { value: 'symbolData', label: 'Symbol Data' },
    { value: 'tradesTransactions', label: 'Trades or Transactions' }
]

const fileTypeOptions = [
    { value: 'mt4/5', label: 'MT4/MT5' },
    { value: 'csv', label: '.csv' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' }
]

const FileUploadModal = ({ handleUpload }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedUploadOption, setSelectedUploadOption] = useState(null)
    const [selectedFileType, setSelectedFileType] = useState(null)
    const [file, setFile] = useState(null)
    const [uploadOptionError, setUploadOptionError] = useState(null)
    const [fileTypeError, setFileTypeError] = useState(null)
    const [fileError, setFileError] = useState(null)

    const toggleModal = () => setIsModalOpen(!isModalOpen)

    const handleUploadOptionChange = (option) => {
        setSelectedUploadOption(option)
        setUploadOptionError(null)
    }

    const handleFileTypeChange = (option) => {
        setSelectedFileType(option)
        setFileTypeError(null)
    }

    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }

    const handleUploadClick = () => {
        if (!selectedUploadOption || !selectedFileType || !file) {
            if (!selectedUploadOption) {
                setUploadOptionError('Please select an upload type.')
            }

            if (!selectedFileType) {
                setFileTypeError('Please select a file type.')
            }

            if (!file) {
                setFileError('Please select a file.')
            }
        } else {
            handleUpload(selectedUploadOption, selectedFileType, file)
            toggleModal()
        }
    }

    return (
        <>
            <Button
                color='primary'
                onClick={toggleModal}
                style={{ marginBottom: '10px' }}
            >
                Upload Data
            </Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal} backdrop='static'>
                <ModalHeader toggle={toggleModal}>Upload Data</ModalHeader>
                <ModalBody>
                    <Select
                        className='upload-select'
                        options={uploadOptions}
                        placeholder='What type of upload is this?'
                        onChange={handleUploadOptionChange}
                    />
                    {uploadOptionError && (
                        <div className='error'>{uploadOptionError}</div>
                    )}
                    <Select
                        className='file-select'
                        options={fileTypeOptions}
                        placeholder='What file type is this?'
                        onChange={handleFileTypeChange}
                    />
                    {fileTypeError && (
                        <div className='error'>{fileTypeError}</div>
                    )}
                    {fileError && <div className='error'>{fileError}</div>}
                    <input type='file' onChange={handleFileChange} />
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={handleUploadClick}>
                        Upload
                    </Button>{' '}
                    <Button color='secondary' onClick={toggleModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default FileUploadModal
