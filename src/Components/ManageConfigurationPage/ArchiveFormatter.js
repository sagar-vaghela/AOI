import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mcArchiveDataBase } from '../../actions/dmcCurrentFiles';

export default function ArchiveFormatter({ cell, row }) {

    const [download, setDownload] = useState(false);

    const mcArchiveDatabase = useSelector((state) => state.dmcArchiveDatabaseReducer.dmcArchiveDataBaseData);


    useEffect(() => {
        if (mcArchiveDatabase && mcArchiveDatabase.data && download) {
            const url = window.URL.createObjectURL(new Blob([mcArchiveDatabase.data]));
            const a = document.createElement('a');
            a.href = url;
            a.download = `${row.name}.db`
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            setDownload(false);

        }
    }, [mcArchiveDatabase && download]);

    const dispatch = useDispatch();

    const handleDownload = async (name) => {

        await dispatch(mcArchiveDataBase(name));
        setDownload(true);
    }

    return (
        <div onClick={() => handleDownload(row.name)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
        </div>
    )
}
