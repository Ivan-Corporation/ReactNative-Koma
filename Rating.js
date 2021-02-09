import React from 'react';
import { H1, Icon } from 'native-base';
import { Row } from 'react-native-easy-grid';

export default function Rating(props) {
    return (
        <Row>
            <H1>Rating: {props.rating}</H1>
            {props.rating >= 1 ? (
                <Icon type='FontAwesome' name='star' />
            ) : (
                    <Icon type='FontAwesome' name='star-o' />
                )}
            {props.rating >= 2 ? (
                <Icon type='FontAwesome' name='star' />
            ) : (
                    <Icon type='FontAwesome' name='star-o' />
                )}
            {props.rating >= 3 ? (
                <Icon type='FontAwesome' name='star' />
            ) : (
                    <Icon type='FontAwesome' name='star-o' />
                )}
            {props.rating >= 4 ? (
                <Icon type='FontAwesome' name='star' />
            ) : (
                    <Icon type='FontAwesome' name='star-o' />
                )}
            {props.rating >= 5 ? (
                <Icon type='FontAwesome' name='star' />
            ) : (
                    <Icon type='FontAwesome' name='star-o' />
                )}

        </Row>
    );
}
