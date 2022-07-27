import Image from "next/image"

const MediumCard = ({img, title}) => {
  return (
    <div>
        <div>
            <Image src={img} layout='fill'/>
        </div>
    </div>
  )
}

export default MediumCard