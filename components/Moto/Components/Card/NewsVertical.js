import MotoDiv from "../MotoSmalls/Div"
import MotoIconSvg from "../MotoSmalls/IconSvg"
import MotoDate from "../MotoSmalls/Date"

var calendarsvg = "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621317577/motocar/newmoto/zmmq0fxkzoaw5p1dln16.png"
var sharessvg = "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621317727/motocar/newmoto/sfty4vntxcz3jbs0n7fs.png"
var seensvg = "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621317726/motocar/newmoto/p4j6cy71urdwho4er9of.png"

export default function NewsVertical(props) {

  const { data, index } = props
  console.log("INDEX", index)

  return (
    <div className={`${index !== 0 ? "pl-4" :""} relative w-full`}>
      <a href={`/news/${data.id}`} className="hover:text-green-400">
        <div 
          className="h-48 w-auto rounded-xl"
          style={{    
            backgroundImage: `url(${data.imagemain})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            objectFit: 'cover'
          }}
        >
        {/* <img src={data.imagemain} className="w-full h-auto object-cover"/> */}
        </div>
          <div className="w-full">
            <div className="w-full flex items-center justify-between mt-3 text-gray-300">
              <div className="flex items-center content-start">
                <MotoIconSvg svg={calendarsvg} defaultClassName="text-xs mr-2"/>
                <MotoDate date={data.createddate} defaultClassName="text-xs"/>
              </div>
              <div className="flex items-center content-start">
                <MotoIconSvg svg={sharessvg} defaultClassName="text-xs mr-2"/>
                <MotoDiv 
                  item={{value: data.sharecount}}
                  defaultClassName="text-xs"
                />
              </div>
              <div className="flex items-center content-start">
                <MotoIconSvg svg={seensvg} defaultClassName="text-xs mr-2"/>
                <MotoDiv 
                  item={{value: data.seencount}}
                  defaultClassName="text-xs"
                />
              </div>
            </div>
            <div className="mt-2">
              <MotoDiv 
                item={{value: data.title}}
                defaultClassName="trancate h-12 text-xs font-bold uppercase"
              />
            </div>
          </div>
        </a>
      </div>
    )
}