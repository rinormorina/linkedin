import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function Inovations() {

  return <div className='inovation-wrap'>
      <hr className="hr-text" data-content="OR"/>
  <div className='connections'>
      
      <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
      <div className='personal-info'>
      <h3 className='invite-name'>Rinor</h3>
      <p className='title-name'> programmer</p>
      <p className="connection-number">543</p>
      </div>
      <div className='text-area'>
      <p className='text'> lorem    lorem   lorem lorem    lorem   lorem lorem    lorem   lorem lorem    lorem   lorem lorem    lorem   lorem lorem    lorem   lorem lorem    lorem   lorem</p>
      </div>
      <div className='button-section'>
          <button>Accept</button>
          <button>Decline</button>
      </div>
      
    </Stack>
  </div>
  <hr className="hr-text" data-content="OR"/>
  <div className='recent-connection'>
  
      <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
      <div>
      <h3 className='invite-name'>Rinor</h3>
      <p className='title-name'> programmer</p>
      <p className="connection-number">543</p>
      <p className='inovation-date'>Yestarday</p>
      </div>
      
    </Stack>
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
      <div>
      <h3 className='invite-name'>Rinor</h3>
      <p className='title-name'> programmer</p>
      <p className="connection-number">543</p>
      </div>
      
    </Stack>  </div>
  </div>
}

export default Inovations;
