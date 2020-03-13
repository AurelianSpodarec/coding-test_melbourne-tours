import React, { useState } from 'react';

import {
    Button,
    Header,
    Image,
    Modal
} from 'semantic-ui-react';

function AuthModal({ open, close }) {


    return (
        <div>

            <Modal open={open} onClose={close}>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <Image
                        wrapped
                        size='medium'
                        src='/images/avatar/large/rachel.png'
                    />
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>
                            We've found the following gravatar image associated with your
                            e-mail address.
                </p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' >
                        Nope
              </Button>
                    <Button
                        positive
                        icon='checkmark'
                        labelPosition='right'
                        content="Yep, that's me"
                    />
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default AuthModal;