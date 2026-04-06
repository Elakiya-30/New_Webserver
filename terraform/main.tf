provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "Web_Server" {
  ami           = "ami-05d2d839d4f73aafb" 
  instance_type = "t3.small"
  key_name      = "linuxnew"

  security_groups = [aws_security_group.Developer_Webserver.name]

  user_data = <<-EOF
              #!/bin/bash
              apt update -y
              apt install nginx -y
              systemctl start nginx
              systemctl enable nginx
              EOF

  tags = {
    Name = "Web_Server"
  }
}

resource "aws_security_group" "Developer_Webserver" {
  name = "Web_Server"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
output "public_ip" {
  value = aws_instance.Web_Server.public_ip
}