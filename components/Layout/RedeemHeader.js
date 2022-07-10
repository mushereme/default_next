


export const RedeemHeader = (props) => {

  return (
    <div
      className=""
      style={{
        backgroundColor: "#41469a",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('https://res.cloudinary.com/daliec2ib/image/upload/v1657362332/BKO/companies-941bedb65acb8d38c61818f91f55c5dd8350bd5fe4f17861de381a71298f166e_fr5ncl.png')`
      }}
    >
      <div className="container mx-auto py-auto" style={{minHeight: '544px'}}>
        <div 
          className="bko-panel"
          
        >
          <div
            className="bko-floater"
            style={{
              maxWidth: '800px',
              backgroundImage: 'url(https://res.cloudinary.com/daliec2ib/image/upload/v1657371105/BKO/confetti-4c93fa8b6ba8308f1a53d773624917152c2543f020d11e006b1aaa7a2414a557_tyqe41.png)'
            }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

