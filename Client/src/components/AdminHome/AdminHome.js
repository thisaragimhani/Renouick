import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminHeader from './AdminHeader/AdminHeader';
import AdminDash from './AdminDash/AdminDash';
import AdminRegistration from './AdminRegistration/AdminRegistration';
import EditAdminProfile from './EditAdminProfile/EditAdminProfile';
import EditCustomerProfile from './EditCustomerProfile/EditCustomerProfile';
import EditWorkerProfile from './EditWorkerProfile/EditWorkerProfile';
import ProvideSupportPage from './ProvideSupportPage/ProvideSupportPage';
import ReportView from './ReportView/ReportView';
import Chat from './Chat/Chat';
import AdvertisementManage from './AdvertisementManage/AdvertisementManage';
const AdminHome = (props) => {

    return (
        <React.Fragment>
            <AdminHeader history={props.history}/>
            <Switch>
                <Route path={props.match.url} exact component={AdminDash}/>
                <Route path={props.match.url + '/admin_registration'} component={AdminRegistration} />
                <Route path={props.match.url + '/edit_admin_profile'} component={EditAdminProfile}/>
                <Route path={props.match.url + '/edit_customer_profile'} component={EditCustomerProfile} />
                <Route path={props.match.url + '/edit_worker_profile'} component={EditWorkerProfile}/>
                <Route path={props.match.url + '/provide_support_page'} component={ProvideSupportPage}/>
                <Route path={props.match.url + '/report_view'} component={ReportView}/>
                <Route path={props.match.url + '/chat'} component={Chat}/>
                <Route path={props.match.url + '/add'} component={AdvertisementManage}/>
            </Switch>
        </React.Fragment>
    );

    
};

export default AdminHome;