import React from 'react'

export function ArticleCard(props) {
    

    return (
        <div class="flex flex-col items-center bg-gray-50 rounded-lg shadow md:flex-row ">
        {/* <div class="items-center bg-gray-50 rounded-lg shadow sm:flex "> */}
              <a href="articles/about" className='h-96 md:h-full w-full md:w-96'>
                  <img class="w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg" 
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" 
                  alt="Bonnie Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight ">
                      <a href="articles/about">How we can do customise</a>
                  </h3>
                  <time pubdate datetime="2022-02-08" title="February 8th, 2022" className=' text-xs'>Feb. 8, 2022</time>
                  <p class="mt-3 mb-4 font-light text-gray-500 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum <br /> 
                    <a href="articles/about" className=' underline hover:text-customblue font-medium'>Read more</a>
                  </p>
              </div>
          </div> 
    )
}
