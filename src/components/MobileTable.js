import classnames from 'classnames';
import PropTypes from 'prop-types';

const MobileTable = ({usersInfo, isDark}) => {
  if(!usersInfo) {
    return;
  }

  return (
    <div className="max-w-sm sm:hidden bg-transparent my-4">
      {usersInfo.map((u) =>{
        const date = new Date(u.created_at);

        const formattedDate = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short"
        });

        return(
          <div 
            key={u.created_at} 
            className={classnames("w-full flex flex-col border-b p-3 text-gray-900", {
              "text-white": isDark
            })}
          >
            <div className="font-medium my-1 font-bold font-brand text-base">
              {u.name}
            </div>
            <div className="my-1 font-brand text-base">
              {u.phone}
            </div>
            <div className="my-1 font-brand text-base">
              {u.email}
            </div>
            <div className="my-1 font-brand text-base">
              {formattedDate}
            </div>
          </div>
        )
      })}
    </div>
  )
}

MobileTable.propTypes = {
  usersInfo: PropTypes.array,
  isDark: PropTypes.bool
}
  
export default MobileTable;