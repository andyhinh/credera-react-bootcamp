import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

const styles = () => ({
  card: {
    maxWidth: 400,
  },
  avatar: {
    backgroundColor: red[500],
  },
  text: {
    wordBreak: "break-all"
  }
});

class RedditCard extends Component {
  render() {
    const { classes, post } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Avatar" className={classes.avatar}>
              R
            </Avatar>
          }
          title={post.title}
        />
        {post.selftext && <CardContent>
          <Typography component="p" className={classes.text}>
            {post.selftext.length > 500 ? post.selftext.slice(0, 500) + "..." : post.selftext}
          </Typography>
        </CardContent>}
      </Card>
    );
  }
}

RedditCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RedditCard);