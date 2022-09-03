import { Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/container.module.css'

const Loading = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.loading_container}>
            <Spinner
                color="secondary"
                style={{
                height: '10rem',
                width: '10rem'
                }}
            >
                Loading...
            </Spinner>
            </div>
            
        </div>
    )
}
export default Loading;