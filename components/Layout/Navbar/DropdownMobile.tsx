import React from 'react'

export default function DropdownMobile(props: any) {
  return (
    <div>
      <p>
        Open <strong>multiple</strong>
      </p>
      <div className="shadow-md">
        <div className="tab w-full overflow-hidden border-t">
          <input
            className="absolute opacity-0 "
            id="tab-multi-one"
            type="checkbox"
            name="tabs"
          />
          <label
            className="block p-5 leading-normal cursor-pointer"
            htmlFor="tab-multi-one"
          >
            Label One
          </label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
              architecto, explicabo perferendis nostrum, maxime impedit atque
              odit sunt pariatur illo obcaecati soluta molestias iure facere
              dolorum adipisci eum? Saepe, itaque.
            </p>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input
            className="absolute opacity-0"
            id="tab-multi-two"
            type="checkbox"
            name="tabs"
          />
          <label
            className="block p-5 leading-normal cursor-pointer"
            htmlFor="tab-multi-two"
          >
            Label Two
          </label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
              architecto, explicabo perferendis nostrum, maxime impedit atque
              odit sunt pariatur illo obcaecati soluta molestias iure facere
              dolorum adipisci eum? Saepe, itaque.
            </p>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input
            className="absolute opacity-0"
            id="tab-multi-three"
            type="checkbox"
            name="tabs"
          />
          <label
            className="block p-5 leading-normal cursor-pointer"
            htmlFor="tab-multi-three"
          >
            Label Three
          </label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
              architecto, explicabo perferendis nostrum, maxime impedit atque
              odit sunt pariatur illo obcaecati soluta molestias iure facere
              dolorum adipisci eum? Saepe, itaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
