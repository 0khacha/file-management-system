import { useEffect, useRef, useState } from 'react';
import './GeneralSettings.css';
import userimg from '../../../assets/icons/OIG1.jpg';
import ConfirmationModal from './ConfirmationModal.jsx';

const GeneralSettings = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    image: '',
  });
  const [passwordData, setPasswordData] = useState({
    password: '',
    new_password: '',
    new_password_confirmation: '',
  });
  const [inEditPassword, setInEditPassword] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteButtonClick, setDeleteButtonClick] = useState(false);
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Mock user data setup (replace this with actual data from a hook or global state)
    const user = {
      first_name: 'Med',
      last_name: 'Khacha',
      email: 'Med.khacha@gmail.com',
      phone_number: '0653206661',
      image: '',
    };
    setFormData({
      first_name: user.first_name || '',
      last_name: user.last_name || '',
      email: user.email || '',
      phone_number: user.phone_number || '',
      image: user.image || '',
    });
  }, []);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({
            ...formData,
            image: reader.result,
          });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });

      // Clear errors
      setErrors({
        ...errors,
        [e.target.name]: '',
      });

      // Email validation (mocked)
      if (e.target.name === 'email') {
        if (e.target.value === 'taken@example.com') {
          setErrors({ ...errors, email: 'Cet email est déjà utilisé' });
        }
      }
    }
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mock update user data:', formData);
    // You can add further validation here before submitting
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.new_password !== passwordData.new_password_confirmation) {
      alert('New password and confirmation do not match. Please try again.');
      return;
    }
    console.log('Mock password update:', passwordData);
    setPasswordData({
      password: '',
      new_password: '',
      new_password_confirmation: '',
    });
    setInEditPassword(false);
  };

  const handleConfirmDeleteModal = () => {
    setDeleteButtonClick(true);
  };

  const handleConfirmDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      console.log('Mock account deletion with password:', confirmationPassword);
      setIsDeleting(false);
      // Handle post-delete actions (like navigation)
    }, 1000);
  };

  const handleCancelDelete = () => {
    setDeleteButtonClick(false);
    setConfirmationPassword('');
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleEdit = () => {
    setInEditPassword(!inEditPassword);
  };

  return (
    <div className='setting-page-profile'>
      <section className='profile-details-section'>
        <h3>Détails du profil</h3>
        <div className='photo-section'>
          <div className='image'>
            <img onClick={handleClick} src={formData.image || userimg} alt="user" />
          </div>
          <input ref={fileInputRef} type="file" id="image" name="image" accept="image/*" onChange={handleChange} style={{ display: 'none' }} />
        </div>
        <div className='user-email-class'>
          <form className="user-email">
            <div>
              <label htmlFor="first_name">Prénom</label>
              <input
                type="text"
                id='first_name'
                name='first_name'
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="last_name">Nom</label>
              <input
                type="text"
                id='last_name'
                name='last_name'
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>


            <div className="full-width">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>


            <div className="full-width">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id='phone'
                name='phone_number'
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Met à jour</button>
          </form>

        </div>
      </section>
      <section className='section-second-box'>
        <section className='password-section'>
          {inEditPassword ? (
            <div className="edit-password">
              <h4 className="title-password">Changer votre mot de passe</h4>
              <form onSubmit={handlePasswordSubmit}>
                <div className="password-inputs">
                  <input
                    type="password"
                    placeholder="Entrez votre mot de passe actuel"
                    name="password"
                    value={passwordData.password}
                    onChange={handlePasswordChange}
                  />
                  <div className="new-password-dev">
                    <input
                      type="password"
                      placeholder="Entrez votre nouveau mot de passe"
                      name="new_password"
                      value={passwordData.new_password}
                      onChange={handlePasswordChange}
                    />
                    <input
                      type="password"
                      placeholder="Confirmez votre nouveau mot de passe"
                      name="new_password_confirmation"
                      value={passwordData.new_password_confirmation}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
                <button type="submit">Mettre à jour</button>
                <button type="button" onClick={handleEdit}>Annuler</button>
              </form>
            </div>
          ) : (
            <div>
              <h3>Changer le mot de passe</h3>
              <p>Pour changer votre mot de passe, veuillez entrer votre mot de passe actuel et votre
                nouveau mot de passe ci-dessous.</p>
              <button onClick={handleEdit}>Changer le mot de passe</button>
            </div>
          )}
        </section>
        <section className='delete-account-section'>
          <h3>Supprimer le compte</h3>
          <p>Si vous souhaitez supprimer votre compte, veuillez cliquer sur le bouton ci-dessous.</p>
          <button onClick={handleConfirmDeleteModal}>Supprimer le compte</button>
          {deleteButtonClick && (
            <ConfirmationModal
              message="Êtes-vous sûr de vouloir supprimer votre compte ?"
              output={isDeleting && 'Suppression du compte, veuillez patienter...'}
              result={() => (isDeleting ? 'Deleting...' : '')}
              onConfirm={handleConfirmDelete}
              onCancel={handleCancelDelete}
              passwordInput={(
                <input
                  type="password"
                  placeholder="Entrez votre mot de passe ..."
                  value={confirmationPassword}
                  onChange={(e) => setConfirmationPassword(e.target.value)}
                />
              )}
            />
          )}
        </section>
      </section>
    </div>
  );
};

export default GeneralSettings;

