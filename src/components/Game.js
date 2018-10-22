import React from 'react'
import CurrentBoard from '../containers/CurrentBoard'
import CurrentStepList from '../containers/CurrentStepList'
import injectSheet from 'react-jss'


const styles = theme => ({
    game : {
        fontFamily: "Century Gothic",
        fontSize: 14
    },
    gameBoard: {
        width: 102,
        minHeight: 240,
        margin: {
          right: 10
        },
        float: 'left',
        '& button.square': {
            color: theme.color,
            background: theme.bgColor,
            width: 34,
            height: 34,
            border: {
                color: theme.color,
                width: 1,
                style: 'solid'
            },
            float: 'left',
            fontSize: 24,
            fontWeight: 'bold',
            margin: {
                top: -1,
                right: -1
            },
            padding: 0,
            textAlign: 'center',
            '&:focus': {
                outline: 'none'
            }
        }
    },
    gameInfo: {
        margin: {
            left: 20
        },
        '& ul': {
            listStyleType: "none",
            padding: {
                left: 30
            }
        }
    }
})

const Game = ({classes, toggleTheme}) => (
    <div className={classes.game}>
        <div className={classes.gameBoard}>
            <button onClick={() => {toggleTheme()}}>Toggle theme</button>
            <CurrentBoard />
        </div>
        <div className={classes.gameInfo}>
            <CurrentStepList />
        </div>
    </div>
);


export default injectSheet(styles)(Game);
