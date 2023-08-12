import JoditEditor from 'jodit-react';
import { useState, useRef, useMemo } from 'react';
import HTMLReactParser from 'html-react-parser';

export function CreateArticle(props) {
    
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [contentTitle, setContentTitle] = useState('');

    const [showPrev, setShowPrev] = useState(false);

    return (
        <>
            <div className=' max-w-2xl  mx-auto p-4 md:p-0'>
                <div className=' flex justify-between items-center py-4'>
                    {
                        showPrev ? (
                            <button type="button" className="w-fit text-white bg-customblue hover:bg-blue-500 focus:outline-none rounded-lg px-5 py-2  my-2 md:my-0  ">Save Article</button>
                        ): (
                            <p></p>
                        )
                    }
                    <button className=' p-2 border-[1px] border-gray-400 hover:bg-extralight rounded-lg' onClick={() => setShowPrev(!showPrev)}>{showPrev ? 'Continue Writing': "Show Preview"}</button>
                </div>
                
                {showPrev ? (
                    <>
                    <h1 className='text-3xl font-bold mb-4'>{contentTitle}</h1>
                    <div className='mx-auto w-full max-w-2xl format text-base font-normal text-darkgray'>
                        {content && HTMLReactParser(content)}
                    </div>
                    </>
                ): (
                    <>
                        <input 
                            type="text" 
                            placeholder='Title' 
                            onChange={(e) => setContentTitle(e.target.value)}
                            value={contentTitle} className='w-full p-2 border border-gray-300 rounded-md mb-4' />
                        <JoditEditor 
                            ref={editor} 
                            value={content} 
                            onChange={newContent => setContent(newContent)}
                        />
                    </>
                    
                )}
                

                
            </div>
        </>
    )
}
