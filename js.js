import React from 'react';
import TabBarNavItem from "./TabBarNavItem";
import classes from "./TabBar.module.scss";

const TabBar = ({className, children, initialActiveTab, navItemClick}) => {

    const cls = [classes.TabBar,className]
    return (
        <div className={cls.join(' ')}>
            <div className={classes.TabContainer}>
                {children.map((child,index)=>(
                    <TabBarNavItem
                        key={index}
                        navLabel={child.props.label}
                        onChangeActiveTab={
                            (activeTab)=>{
                                navItemClick(activeTab)
                            }
                        }
                        className={initialActiveTab === child.props.label ? classes.Active : ''}
                    />
                ))}
            </div>

            <div className={classes.TabContent}>
                {
                    React.Children.map(children,child => React.cloneElement(child,{activeTab:initialActiveTab}))
                }
            </div>
        </div>
    );
};

export default TabBar;