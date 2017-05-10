CREATE TABLE `user`(
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`name` varchar(255) DEFAULT NULL COMMENT '名字',
	`age` int(11) DEFAULT NULL COMMENT '年龄',
	`password` varchar(255) DEFAULT NULL COMMENT '密码',
	`sex` tinyint(3) DEFAULT NULL COMMENT '性别1:男; 2:女; 3:保密',
	`address` varchar(255) DEFAULT COMMENT'地址',
	`email` varchar(255) DEFAULT NULL COMMENT '邮箱',
	`cellphone` int(11) DAFAULT NULL COMMENT '联系方式',
	PRIMARY KEY (`id`)
	)
	ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8m64;

create table `user`(
	`id` int(11) unsigend not null auto_increment,
	`name` varchar(255) default null comment '姓名',
	`age` int(11) default null comment '年龄',
	`password` varchar(255) default null comment '密码',
	`sex` tinyint(3) default null comment '性别1:男;2:女;3:保密',
	`address` varchar(255) default null comment '地址',
	`email` varchat(255) default null comment '邮箱',
	`cellphone` int(11) default null comment '联系方式',
	primary key (`id`)
    )
    engine = InnoDB auto_increment = 3 DEFAULT CHARSET = utf8m64;


CREATE TABLE  `dota2`(
	`id` int(11)  unsigend NOT NULL Auto_increment,
	`game_id` varchar(255) DEFAULT NULL COMMENT '游戏ID',
	`name` varchar(255) DEFAULT NULL COMMENT '姓名',
	`age` int(11)  DEFAULT NULL COMMENT '年龄',
	`password` varchar(255) DEFAULT NULL COMMENT '密码',
	`nationality` varchar(255) DEFAULT NULL COMMENT '国籍',
	`location` int(11) DEFAULT NULL COMMENT '战队位置',
	`troops` varchar(255) DEFAULT NULL COMMENT '所属战队',
	`status` int(11) DEFAULT NULL COMMENT '状态',
	primary key (`id`)
	)
	ENGINE = InnoDB Auto_increment = 3 DEFAULT CHARSET = utf8m64;


create table `dota2`(
	`id` int(11) unsigend not NULL Auto_increment,
	`game_id` varchar(255) DEFAULT NULL COMMENT '游戏ID',
	`name` varchar(255) DEFAULT NULL comment '姓名',
	`age` int(11) DEFAULT NULL COMMENT '年龄',
	`password` varchar(255) DEFAULT NULL COMMENT '密码',
	`nationality` varchar(255) DEFAULT NULL comment '国籍',
	`location` int(11) DEFAULT NULL COMMENT '战队位置',
	`troops` varchar(255) DEFAULT NULL comment '所属战队',
	`status` int(11) DEFAULT NULL COMMENT '状态',
	primary key (`id`)
)
	ENGINE = InnoDB Auto_increment = 3 DEFAULT CHARSET = utf8m64;