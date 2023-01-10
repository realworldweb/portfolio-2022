import Styles from '../../../styles/modules/animations/pulsing-grid.module.css'

const PulsingGrid = () => {
  return (
    <div className={`mx-auto pt-1 ${Styles.loader}`}>
        <div className={`${Styles.loaderInner} ${Styles.ballGridPulse}`}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
  )
}

export default PulsingGrid;