class Conventionalcommit < Formula
    desc "This is minimal cli that will help you use conventional commit in your project"
    homepage "https://github.com/pshaddel/homebrew-conventionalcommit"
    url "https://github.com/pshaddel/homebrew-conventionalcommit/releases/download/v1.0.0-alpha/conventionalcommit-macos-x64.tar.gz"
    sha256 "6531354b956f1dc6bfff1959c0cea4fc1d5560021c6fb3190dde64c298202ad8"
    version "1.0.0"
    def install
      bin.install "conventional-commit"
    end
  end