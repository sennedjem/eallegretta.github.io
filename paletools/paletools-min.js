window.paletools = window.paletools || {};
window.paletools['paletools-min'] = "IWZ1bmN0aW9uKGUpe2NvbnN0IHQ9WyIiLCIiLCIiLCJDQU5DRUwiLCIiLCIiLCJIRUxQIiwiIiwiQkFDS19TUEFDRSIsIlRBQiIsIiIsIiIsIkNMRUFSIiwiRU5URVIiLCJFTlRFUl9TUEVDSUFMIiwiIiwiU0hJRlQiLCJDT05UUk9MIiwiQUxUIiwiUEFVU0UiLCJDQVBTX0xPQ0siLCJLQU5BIiwiRUlTVSIsIkpVTkpBIiwiRklOQUwiLCJIQU5KQSIsIiIsIkVTQ0FQRSIsIkNPTlZFUlQiLCJOT05DT05WRVJUIiwiQUNDRVBUIiwiTU9ERUNIQU5HRSIsIlNQQUNFIiwiUEFHRV9VUCIsIlBBR0VfRE9XTiIsIkVORCIsIkhPTUUiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkRPV04iLCJTRUxFQ1QiLCJQUklOVCIsIkVYRUNVVEUiLCJQUklOVFNDUkVFTiIsIklOU0VSVCIsIkRFTEVURSIsIiIsIjAiLCIxIiwiMiIsIjMiLCI0IiwiNSIsIjYiLCI3IiwiOCIsIjkiLCJDT0xPTiIsIlNFTUlDT0xPTiIsIkxFU1NfVEhBTiIsIkVRVUFMUyIsIkdSRUFURVJfVEhBTiIsIlFVRVNUSU9OX01BUksiLCJBVCIsIkEiLCJCIiwiQyIsIkQiLCJFIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJLIiwiTCIsIk0iLCJOIiwiTyIsIlAiLCJRIiwiUiIsIlMiLCJUIiwiVSIsIlYiLCJXIiwiWCIsIlkiLCJaIiwiT1NfS0VZIiwiIiwiQ09OVEVYVF9NRU5VIiwiIiwiU0xFRVAiLCJOVU1QQUQwIiwiTlVNUEFEMSIsIk5VTVBBRDIiLCJOVU1QQUQzIiwiTlVNUEFENCIsIk5VTVBBRDUiLCJOVU1QQUQ2IiwiTlVNUEFENyIsIk5VTVBBRDgiLCJOVU1QQUQ5IiwiTVVMVElQTFkiLCJBREQiLCJTRVBBUkFUT1IiLCJTVUJUUkFDVCIsIkRFQ0lNQUwiLCJESVZJREUiLCJGMSIsIkYyIiwiRjMiLCJGNCIsIkY1IiwiRjYiLCJGNyIsIkY4IiwiRjkiLCJGMTAiLCJGMTEiLCJGMTIiLCJGMTMiLCJGMTQiLCJGMTUiLCJGMTYiLCJGMTciLCJGMTgiLCJGMTkiLCJGMjAiLCJGMjEiLCJGMjIiLCJGMjMiLCJGMjQiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCJOVU1fTE9DSyIsIlNDUk9MTF9MT0NLIiwiV0lOX09FTV9GSl9KSVNITyIsIldJTl9PRU1fRkpfTUFTU0hPVSIsIldJTl9PRU1fRkpfVE9VUk9LVSIsIldJTl9PRU1fRkpfTE9ZQSIsIldJTl9PRU1fRkpfUk9ZQSIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIkNJUkNVTUZMRVgiLCJFWENMQU1BVElPTiIsIkRPVUJMRV9RVU9URSIsIkhBU0giLCJET0xMQVIiLCJQRVJDRU5UIiwiQU1QRVJTQU5EIiwiVU5ERVJTQ09SRSIsIk9QRU5fUEFSRU4iLCJDTE9TRV9QQVJFTiIsIkFTVEVSSVNLIiwiUExVUyIsIlBJUEUiLCJIWVBIRU5fTUlOVVMiLCJPUEVOX0NVUkxZX0JSQUNLRVQiLCJDTE9TRV9DVVJMWV9CUkFDS0VUIiwiVElMREUiLCIiLCIiLCIiLCIiLCJWT0xVTUVfTVVURSIsIlZPTFVNRV9ET1dOIiwiVk9MVU1FX1VQIiwiIiwiIiwiU0VNSUNPTE9OIiwiRVFVQUxTIiwiQ09NTUEiLCJNSU5VUyIsIlBFUklPRCIsIlNMQVNIIiwiQkFDS19RVU9URSIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIk9QRU5fQlJBQ0tFVCIsIkJBQ0tfU0xBU0giLCJDTE9TRV9CUkFDS0VUIiwiUVVPVEUiLCIiLCJNRVRBIiwiQUxUR1IiLCIiLCJXSU5fSUNPX0hFTFAiLCJXSU5fSUNPXzAwIiwiIiwiV0lOX0lDT19DTEVBUiIsIiIsIiIsIldJTl9PRU1fUkVTRVQiLCJXSU5fT0VNX0pVTVAiLCJXSU5fT0VNX1BBMSIsIldJTl9PRU1fUEEyIiwiV0lOX09FTV9QQTMiLCJXSU5fT0VNX1dTQ1RSTCIsIldJTl9PRU1fQ1VTRUwiLCJXSU5fT0VNX0FUVE4iLCJXSU5fT0VNX0ZJTklTSCIsIldJTl9PRU1fQ09QWSIsIldJTl9PRU1fQVVUTyIsIldJTl9PRU1fRU5MVyIsIldJTl9PRU1fQkFDS1RBQiIsIkFUVE4iLCJDUlNFTCIsIkVYU0VMIiwiRVJFT0YiLCJQTEFZIiwiWk9PTSIsIiIsIlBBMSIsIldJTl9PRU1fQ0xFQVIiLCIiXTtsZXQgbj0hMCxvPW5ldyBEYXRlLGk9bnVsbCxhPW51bGw7ZT0kLmV4dGVuZCh7YmFjazo0OSxlbmFibGVEaXNhYmxlOjkyLHRlY2g6ODQsbGlzdHM6e3VwOjM4LGRvd246NDAscHJldjozNyxuZXh0OjM5fSxzZWFyY2g6e2RlY01pbkJpZDozNyxpbmNNaW5CaWQ6MzksZGVjTWF4QmlkOjM1LGluY01heEJpZDozNixkZWNNaW5CdXk6NDYsaW5jTWluQnV5OjM0LGRlY01heEJ1eTo0MCxpbmNNYXhCdXk6Mzgsc2VhcmNoOjUwfSxyZXN1bHRzOntiaWQ6NTIsYnV5OjUxLHRyYW5zZmVyOjgyLGNsdWI6NjcscHJlc3NFbnRlcjohMCxhdXRvQnV5OiExLHByZXZlbnRCYWNrOiEwLHNlbGw6ODEsZGVjQmlkOjQ2LGluY0JpZDozNH19LGV8fHt9KTtjb25zdCBsPXdpbmRvdy5NdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcixyPWUscz13aW5kb3cuc2VydmljZXMuTG9jYWxpemF0aW9uLEE9d2luZG93LnNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgic2VhcmNoLmZpbHRlcnMucGxheWVycyIpLGM9d2luZG93LnNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgiY2FyZC50aXRsZS5zcXVhZGZpdG5lc3MiKSxwPXdpbmRvdy5zZXJ2aWNlcy5Mb2NhbGl6YXRpb24ubG9jYWxpemUoImNhcmQudGl0bGUuY29udHJhY3QiKSx1PShlLHQpPT57bGV0IG49bmV3IGwoZnVuY3Rpb24oZSxuKXsoZVswXS5hZGRlZE5vZGVzLmxlbmd0aHx8ZVswXS5yZW1vdmVkTm9kZXMubGVuZ3RoKSYmdCgpfSk7cmV0dXJuIG4ub2JzZXJ2ZShlLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pLG59LGQ9KGUsdCk9PntpZigwPT1lLmxlbmd0aClyZXR1cm4hMTtjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KCJNb3VzZUV2ZW50cyIpO3JldHVybiBuLmluaXRFdmVudCh0KSxlWzBdLmRpc3BhdGNoRXZlbnQobiksITB9LEU9ZT0+KGU9PmQoZSwibW91c2Vkb3duIikpKGUpJiYoZT0+ZChlLCJtb3VzZXVwIikpKGUpLGI9KGUsdCk9PiQoIi5wbGF5ZXItc3RhdHMtZGF0YS1jb21wb25lbnQgLnZhbHVlIixlKVt0XS50ZXh0Q29udGVudCxoPXtvdnI6ZT0+JCgiLnJhdGluZyIsZSlbMF0udGV4dENvbnRlbnQscGFjOmU9PmIoZSwwKSxzaG86ZT0+YihlLDEpLHBhczplPT5iKGUsMiksZHJpOmU9PmIoZSwzKSxkZWY6ZT0+YihlLDQpLHBoeTplPT5iKGUsNSl9LE49JCgiLnV0LWZpZmEtaGVhZGVyLXZpZXciKSx2PWU9PntsZXQgdD0kKCIubGlzdEZVVEl0ZW0iLGUpO2lmKDA9PXQubGVuZ3RofHx0LmZpbHRlcignW3Byb2Nlc3NlZD0idHJ1ZSJdJykubGVuZ3RoPjApcmV0dXJuO2xldCBuPSQoIiNzcXVhZEZpdG5lc3MiKS52YWwoKSxvPSQoIiNjb250cmFjdHMiKS52YWwoKTt0LmVhY2goKGUsdCk9PntsZXQgaT0kKHQpO2lmKGkuYXR0cigicHJvY2Vzc2VkIiwidHJ1ZSIpLCJwbGF5ZXIiPT09UClpZigwPT0oZT0+JCgkKCIjY2FyZC10eXBlIikudmFsKCksZSkubGVuZ3RoKSh0KSlpLnJlbW92ZSgpO2Vsc2UgZm9yKHZhciBhIGluIGgpe3ZhciBsPSQoYCNfJHthfWApLnZhbCgpO2lmKGwmJmhbYV0odCkhPWwpe2kucmVtb3ZlKCk7YnJlYWt9fWVsc2UoImZpdG5lc3MiPT09UCYmKGU9PiQoYC5uYW1lOmNvbnRhaW5zKCR7Y30pYCxlKS5sZW5ndGg+MD8kKCIuc3VidHlwZSIsZSlbMF0udGV4dENvbnRlbnQ6bnVsbCkodCkhPW58fCJjb250cmFjdHMiPT09UCYmKGU9PiQoIi5jb250cmFjdHMiLGUpLmhhc0NsYXNzKCJyYXJlIik/InJhcmUiOiJjb21tb24iKSh0KSE9bykmJmkucmVtb3ZlKCl9KSwodD0kKCIubGlzdEZVVEl0ZW0iLGUpKS5sZW5ndGg+MCYmc2V0VGltZW91dChmdW5jdGlvbigpe0UodCl9LDApLGZpbHRlckxpc3Q9ITF9LE09KCk9PntsZXQgZT0kKCIuZGlhbG9nLWJvZHkgLnV0LWJ1dHRvbi1ncm91cCBidXR0b246ZXEoMCkiKTtFKGUpP2coKTpzZXRUaW1lb3V0KE0sMTApfSxtPSgpPT57bGV0IGU9JCgiLnBhZ2luYXRlZCIpOzAhPWUubGVuZ3RoPyhMKCJzZXQgaXRlbXMgZmlsdGVyIC0gY29udGFpbmVyIGZvdW5kIiksYSYmYS5kaXNjb25uZWN0KCksdihlKSxpJiZpLmRpc2Nvbm5lY3QoKSxpPXUoZVswXSwoKT0+e3YoZSl9KSk6TCgic2V0IGl0ZW1zIGZpbHRlciAtIG5vIGNvbnRhaW5lciIpfSxPPSgpPT57bmV3IERhdGUtbzw1MDB8fChvPW5ldyBEYXRlLEUoJCgiLnV0LW5hdmlnYXRpb24tYnV0dG9uLWNvbnRyb2wiKSl8fHNldFRpbWVvdXQoTywxMCkpfSxUPSgpPT4kKGAudXQtYnV0dG9uLWdyb3VwID4gYnV0dG9uOmNvbnRhaW5zKCcke3MubG9jYWxpemUoImluZm9wYW5lbC5sYWJlbC5zZW5kVHJhZGVQaWxlIil9JylgKSxDPSgpPT4kKGAudXQtYnV0dG9uLWdyb3VwID4gYnV0dG9uOmNvbnRhaW5zKCcke3MubG9jYWxpemUoImluZm9wYW5lbC5sYWJlbC5zdG9yZUluQ2x1YiIpfScpYCksQj0oKT0+JChgLnV0LWJ1dHRvbi1ncm91cCA+IGJ1dHRvbjpjb250YWlucygnJHtzLmxvY2FsaXplKCJpbmZvcGFuZWwubGFiZWwuZGlzY2FyZCIpfScpYCksST0oKT0+e3RyeXtsZXQgZT17fTtpZigkKCIudXQtbWFya2V0LXNlYXJjaC1maWx0ZXJzLXZpZXciKS5sZW5ndGg+MCllW3Iuc2VhcmNoLmRlY01pbkJpZF09KCgpPT5FKCQoIi5kZWNyZW1lbnQtdmFsdWUiKSkpLGVbci5zZWFyY2guaW5jTWluQmlkXT0oKCk9PkUoJCgiLmluY3JlbWVudC12YWx1ZSIpKSksZVtyLnNlYXJjaC5kZWNNYXhCaWRdPSgoKT0+RSgkKCIuZGVjcmVtZW50LXZhbHVlOmVxKDEpIikpKSxlW3Iuc2VhcmNoLmluY01heEJpZF09KCgpPT5FKCQoIi5pbmNyZW1lbnQtdmFsdWU6ZXEoMSkiKSkpLGVbci5zZWFyY2guZGVjTWluQnV5XT0oKCk9PkUoJCgiLmRlY3JlbWVudC12YWx1ZTplcSgyKSIpKSksZVtyLnNlYXJjaC5pbmNNaW5CdXldPSgoKT0+RSgkKCIuaW5jcmVtZW50LXZhbHVlOmVxKDIpIikpKSxlW3Iuc2VhcmNoLmRlY01heEJ1eV09KCgpPT5FKCQoIi5kZWNyZW1lbnQtdmFsdWU6ZXEoMykiKSkpLGVbci5zZWFyY2guaW5jTWF4QnV5XT0oKCk9PkUoJCgiLmluY3JlbWVudC12YWx1ZTplcSgzKSIpKSksZVtyLnNlYXJjaC5zZWFyY2hdPSgoKT0+KCgpPT57RSgkKCIuYnV0dG9uLWNvbnRhaW5lciAuYnRuLXN0YW5kYXJkLmNhbGwtdG8tYWN0aW9uIikpO2xldCBlPSQoIi51dC1uYXZpZ2F0aW9uLWNvbnRhaW5lci12aWV3LS1jb250ZW50Iik7YT11KGVbMF0sKCk9PnttKCl9KX0pKCkpO2Vsc2V7bGV0IHQ9JCgiLmxpc3RGVVRJdGVtIiksbj10Lmxlbmd0aD4wLG89dC5wYXJlbnRzKCIucGFnaW5hdGVkLCAudXQtd2F0Y2gtbGlzdC12aWV3LCAudXQtdHJhbnNmZXItbGlzdC12aWV3Iik7MD09by5sZW5ndGgmJihvPXQucGFyZW50KCkpLG4mJiQoIi5EZXRhaWxQYW5lbCA+IC5iaWRPcHRpb25zIikubGVuZ3RoPjAmJihlW3IucmVzdWx0cy5iaWRdPSgoKT0+RSgkKCIuYmlkQnV0dG9uIikpKSxlW3IucmVzdWx0cy5idXldPSgoKT0+dm9pZChFKCQoIi5idXlCdXR0b24iKSkmJnIucmVzdWx0cy5wcmVzc0VudGVyJiZNKCkpKSxlW3IucmVzdWx0cy5kZWNCaWRdPSgoKT0+RSgkKCIuYmlkT3B0aW9ucyAuZGVjcmVtZW50LXZhbHVlIikpKSxlW3IucmVzdWx0cy5pbmNCaWRdPSgoKT0+RSgkKCIuYmlkT3B0aW9ucyAuaW5jcmVtZW50LXZhbHVlIikpKSksbiYmJCgiLkRldGFpbFBhbmVsID4gLnV0LWJ1dHRvbi1ncm91cCIpLmxlbmd0aD4wJiYoZVtyLnJlc3VsdHMudHJhbnNmZXJdPSgoKT0+RShUKCkpKSxlW3IucmVzdWx0cy5jbHViXT0oKCk9PkUoQygpKSksZVtyLnJlc3VsdHMuc2VsbF09KCgpPT5FKEIoKSkpKSxuJiYoZVtyLmxpc3RzLnVwXT0oKCk9PntsZXQgZT1vLHQ9JCgiLmxpc3RGVVRJdGVtLnNlbGVjdGVkIixlKS5wcmV2KCk7RSh0KSxlLmNzcygicG9zaXRpb24iLCJyZWxhdGl2ZSIpLGUuc2Nyb2xsVG9wKGUuc2Nyb2xsVG9wKCkrdC5wb3NpdGlvbigpLnRvcC10LmhlaWdodCgpKX0pLGVbci5saXN0cy5kb3duXT0oKCk9PntsZXQgZT1vLHQ9JCgiLmxpc3RGVVRJdGVtLnNlbGVjdGVkIixlKS5uZXh0KCk7RSh0KSxlLmNzcygicG9zaXRpb24iLCJyZWxhdGl2ZSIpLGUuc2Nyb2xsVG9wKGUuc2Nyb2xsVG9wKCkrdC5wb3NpdGlvbigpLnRvcCl9KSksJCgiLnBhZ2luZ0NvbnRhaW5lciIpLmxlbmd0aD4wJiYoZVtyLmxpc3RzLnByZXZdPSgoKT0+RSgkKCIucGFnaW5nQ29udGFpbmVyIC5wcmV2OnZpc2libGUiKSkpLGVbci5saXN0cy5uZXh0XT0oKCk9PkUoJCgiLnBhZ2luZ0NvbnRhaW5lciAubmV4dDp2aXNpYmxlIikpKSl9cmV0dXJuIGV9Y2F0Y2goZSl7TChlKX19LGc9KCk9Pnt2YXIgZT1UKCk7aWYoMD09ZS5sZW5ndGgpcmV0dXJuIHZvaWQgc2V0VGltZW91dChnLDUwKTtsZXQgbj0oZSxuKT0+e2lmKCFlKXJldHVybjtsZXQgbz1gIFsgJHt0W3IucmVzdWx0c1tuXV19IF1gLGk9ZS5odG1sKCk7aSYmLTE9PWkuaW5kZXhPZihvKSYmZS5odG1sKGUuaHRtbCgpK28pfTtuKGUsInRyYW5zZmVyIiksbihDKCksImNsdWIiKSxuKEIoKSwic2VsbCIpfSxMPWU9PnskKCIjbG9nIikudmFsKGAke25ldyBEYXRlfTogJHtlfVxuJHskKCIjbG9nIikudmFsKCl9YCl9O2xldCBQPSJwbGF5ZXIiOyQoYDxzZWxlY3Qgc3R5bGU9ImhlaWdodDo0NnB4Ij48b3B0aW9uIHZhbHVlPSJwbGF5ZXIiPiR7QX08L29wdGlvbj48b3B0aW9uIHZhbHVlPSJmaXRuZXNzIj4ke2N9PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iY29udHJhY3RzIj4ke3B9PC9vcHRpb24+PC9zZWxlY3Q+YCkuY2hhbmdlKGZ1bmN0aW9uKCl7UD10aGlzLnZhbHVlLGYuaGlkZSgpLFMuaGlkZSgpLFUuaGlkZSgpLCJwbGF5ZXIiPT10aGlzLnZhbHVlP2Yuc2hvdygpOiJmaXRuZXNzIj09PXRoaXMudmFsdWU/Uy5zaG93KCk6ImNvbnRyYWN0cyI9PT10aGlzLnZhbHVlJiZVLnNob3coKX0pLmFwcGVuZFRvKE4pO2xldCBmPSQoIjxkaXYgLz4iKS5jc3MoImRpc3BsYXkiLCJpbmxpbmUtYmxvY2siKS5hcHBlbmRUbyhOKTtmb3IodmFyIFIgaW4gaCkkKCI8aW5wdXQgLz4iKS5hdHRyKCJpZCIsYF8ke1J9YCkuYXR0cigidHlwZSIsInRleHQiKS5hdHRyKCJzdHlsZSIsIndpZHRoOjUycHgiKS5hZGRDbGFzcygicGxheWVyYXR0ciIpLmF0dHIoInBsYWNlaG9sZGVyIixSLnRvVXBwZXJDYXNlKCkpLmFwcGVuZFRvKGYpOyQoJzxzZWxlY3QgaWQ9ImNhcmQtdHlwZSIgc3R5bGU9ImhlaWdodDo0NnB4Ij5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5pdGVtIj48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5jb21tb246bm90KC5jaGFtcGlvbnMpIj5Db21tb248L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5yYXJlOm5vdCguY2hhbXBpb25zKSI+UmFyZTwvb3B0aW9ucz5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5jb21tb24uY2hhbXBpb25zIj5VQ0wgQ29tbW9uPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIucmFyZS5jaGFtcGlvbnMiPlVDTCBSYXJlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwnLnNwZWNpYWxzIC5wbGF5ZXJPdmVydmlld1tzdHlsZT0iY29sb3I6IHJnYigyNTUsIDIyNiwgMTQwKTsiXVwnPkdvbGQgSUY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCcuc3BlY2lhbHMgLnBsYXllck92ZXJ2aWV3W3N0eWxlPSJjb2xvcjogcmdiKDI0MiwgMjQyLCAyNDMpOyJdXCc+U2lsdmVyIElGPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwnLnNwZWNpYWxzIC5wbGF5ZXJPdmVydmlld1tzdHlsZT0iY29sb3I6IHJnYigyNTIsIDg0LCA5Nyk7Il1cJz5PVFc8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgJykuYXBwZW5kVG8oZik7bGV0IFM9JCgnPHNlbGVjdCBpZD0ic3F1YWRGaXRuZXNzIiBzdHlsZT0iaGVpZ2h0OjQ2cHgiPjxvcHRpb24gdmFsdWU9IiszMCI+KzMwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iKzIwIj4rMjA8L29wdGlvbj48b3B0aW9uIHZhbHVlPSIrMTAiPisxMDwvb3B0aW9uPjwvc2VsZWN0PicpLmFwcGVuZFRvKE4pLmhpZGUoKSxVPSQoJzxzZWxlY3QgaWQ9ImNvbnRyYWN0cyIgc3R5bGU9ImhlaWdodDo0NnB4Ij48b3B0aW9uIHZhbHVlPSJyYXJlIj5SYXJlPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iY29tbW9uIj5Db21tb248L29wdGlvbj48L3NlbGVjdD4nKS5hcHBlbmRUbyhOKS5oaWRlKCk7KCgpPT57bGV0IGU9KGUsbixvLGkpPT5gJHtlfSAuJHtpPyJpbiI6ImRlIn1jcmVtZW50LXZhbHVlOmFmdGVyIHsgZm9udC1zaXplOjEwcHg7IGRpc3BsYXk6YmxvY2s7IG1hcmdpbi10b3A6LTMwcHg7IGNvbnRlbnQ6ICdbICR7dFtyW25dW29dXX0gXScgfWAsbj0odCxuLG8pPT5lKGAuc2VhcmNoLXByaWNlcyAucHJpY2UtZmlsdGVyOm50aC1jaGlsZCgke3R9KWAsInNlYXJjaCIsbixvKSxvPShlLHQsbyk9PmAke24oZSx0KX0ke24oZSxvLCEwKX1gLGk9YFxuICAgICAgICAgICAgJHtvKDIsImRlY01pbkJpZCIsImluY01pbkJpZCIpfVxuICAgICAgICAgICAgJHtvKDMsImRlY01heEJpZCIsImluY01heEJpZCIpfVxuICAgICAgICAgICAgJHtvKDUsImRlY01pbkJ1eSIsImluY01pbkJ1eSIpfVxuICAgICAgICAgICAgJHtvKDYsImRlY01heEJ1eSIsImluY01heEJ1eSIpfVxuICAgICAgICAgICAgJHtlKCIuRGV0YWlsUGFuZWwgPiAuYmlkT3B0aW9ucyIsInJlc3VsdHMiLCJkZWNCaWQiLCExKX1cbiAgICAgICAgICAgICR7ZSgiLkRldGFpbFBhbmVsID4gLmJpZE9wdGlvbnMiLCJyZXN1bHRzIiwiaW5jQmlkIiwhMCl9XG4gICAgICAgICAgICAudXQtbWFya2V0LXNlYXJjaC1maWx0ZXJzLXZpZXcgLmNhbGwtdG8tYWN0aW9uOmFmdGVyIHsgY29udGVudDogJ1sgJHt0W3Iuc2VhcmNoLnNlYXJjaF19IF0nIH1cbiAgICAgICAgICAgIC51dC1uYXZpZ2F0aW9uLWJ1dHRvbi1jb250cm9sOmFmdGVyIHsgZm9udC1zaXplOjEwcHg7IGZsb2F0OnJpZ2h0OyBtYXJnaW4tcmlnaHQ6MTJweDsgY29udGVudDogJ1sgJHt0W3IuYmFja119IF0nIH1cbiAgICAgICAgICAgIC5wYWdpbmdDb250YWluZXIgLnByZXY6YWZ0ZXIgeyBmb250LXNpemU6IDEwcHg7IGRpc3BsYXk6YmxvY2s7IGNvbnRlbnQ6ICdbICR7dFtyLmxpc3RzLnByZXZdfSBdJyB9XG4gICAgICAgICAgICAucGFnaW5nQ29udGFpbmVyIC5uZXh0OmFmdGVyIHsgZm9udC1zaXplOiAxMHB4OyBkaXNwbGF5OmJsb2NrOyBjb250ZW50OiAnWyAke3Rbci5saXN0cy5uZXh0XX0gXScgfVxuICAgICAgICAgICAgLmJpZEJ1dHRvbjphZnRlciB7IGNvbnRlbnQ6ICcgWyAke3Rbci5yZXN1bHRzLmJpZF19IF0nIH1cbiAgICAgICAgICAgIC5idXlCdXR0b246YmVmb3JlIHsgZmxvYXQ6cmlnaHQ7IG1hcmdpbi1sZWZ0OiAtNDBweDsgY29udGVudDogJyBbICR7dFtyLnJlc3VsdHMuYnV5XX0gXScgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLWhvbWUgeyBvcmRlcjogMCB9XG4gICAgICAgICAgICBidXR0b24udXQtdGFiLWJhci1pdGVtLmljb24tc3F1YWQgeyBvcmRlcjogMCB9XG4gICAgICAgICAgICBidXR0b24udXQtdGFiLWJhci1pdGVtLmljb24tc2JjIHsgb3JkZXI6IDEgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLXRyYW5zZmVyIHsgb3JkZXI6IDIgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLXN0b3JlIHsgb3JkZXI6IDIgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLWNsdWIgeyBvcmRlcjogMiB9XG4gICAgICAgICAgICBgO3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInN0eWxlIik7YS50eXBlPSJ0ZXh0L2NzcyIsYS5pbm5lclRleHQ9aSxkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGEpfSkoKSxkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoImtleWRvd24iLGU9PntpZihlLmtleUNvZGU9PXIuZW5hYmxlRGlzYWJsZSYmKG49IW4sJCgiI3BhbGV0b29scy1zdGF0dXMiKS5jc3MoImNvbG9yIixuPyJsaW1lIjoicmVkIikudGV4dChuPyJPTiI6Ik9GRiIpKSxuKWlmKGUua2V5Q29kZSE9ci5iYWNrKWlmKGUua2V5Q29kZSE9ci50ZWNoKXRyeXtsZXQgdD1JKClbZS5rZXlDb2RlXTt0JiZ0KCl9Y2F0Y2goZSl7TChlKX1lbHNlKCgpPT57bGV0IGU9cGFyc2VJbnQoJCgiLkRldGFpbFBhbmVsIC5hdWN0aW9uSW5mbyAuY3VycmVuY3ktY29pbnMiKS50ZXh0KCkucmVwbGFjZSgiLCIsIiIpLnJlcGxhY2UoIi4iLCIiKSk7aWYoIWV8fCQoIi5EZXRhaWxQYW5lbCAudGVjaEF2aW9uIikubGVuZ3RoPjApcmV0dXJuO2xldCB0PWUrMWUzKihNYXRoLmZsb29yKGUvMWU0KS0xKSszNTAwOyQoIi5EZXRhaWxQYW5lbCAuYXVjdGlvbkluZm8iKS5hcHBlbmQoYDxkaXYgY2xhc3M9ImNvbHVtbiI+PHNwYW4gY2xhc3M9InNlY29uZGFyeSBzdWJIZWFkaW5nIHRlY2hBdmlvbiI+VGVjaCBBdmlvbjwvc3Bhbj48c3BhbiBjbGFzcz0iY29pbnMgc3ViQ29udGVudCI+JHt0fTwvc3Bhbj48L2Rpdj5gKX0pKCk7ZWxzZSBPKCl9KTtsZXQgRj1lPT4kKCJuYXYudXQtdGFiLWJhciIpLmFwcGVuZChgPGJ1dHRvbiBjbGFzcz0idXQtdGFiLWJhci1pdGVtIiBzdHlsZT0ib3JkZXI6MyI+JHtlfTwvYnV0dG9uPmApLHk9KGUsdCxuLG8pPT5GKGA8YSBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6JHtvfHwiaW5oZXJpdCJ9O2N1cnNvcjpwb2ludGVyO2N1cnNvcjpoYW5kIiB0YXJnZXQ9IiR7dH0iIGhyZWY9IiR7ZX0iPiR7bn08L2E+YCk7eSgiaHR0cDovL2VhbGxlZ3JldHRhLmdpdGh1Yi5pby9wYWxldG9vbHMvIiwicGFsZXRvb2xzIiwnUGFsZXRvb2xzIHYyLjAuNCA8c3BhbiBpZD0icGFsZXRvb2xzLXN0YXR1cyIgc3R5bGU9ImNvbG9yOmxpbWUiPk9OPC9zcGFuPicpLHkoImh0dHBzOi8vdHdpdHRlci5jb20vRkZWQSIsInR3aXR0ZXIiLCJARkZWQSIsIiMwMDk5RkY7Zm9udC13ZWlnaHQ6Ym9sZCIpLEYoJzxmb3JtIGlkPSJwYWxldG9vbHMtZG9uYXRlIiBhY3Rpb249Imh0dHBzOi8vd3d3LnBheXBhbC5jb20vY2dpLWJpbi93ZWJzY3IiIG1ldGhvZD0icG9zdCIgdGFyZ2V0PSJfYmxhbmsiPlxuICAgIDxpbnB1dCB0eXBlPSJoaWRkZW4iIG5hbWU9ImNtZCIgdmFsdWU9Il9kb25hdGlvbnMiIC8+XG4gICAgPGlucHV0IHR5cGU9ImhpZGRlbiIgbmFtZT0iYnVzaW5lc3MiIHZhbHVlPSJaQUpYNkFENlhQTFJOIiAvPlxuICAgIDxpbnB1dCB0eXBlPSJoaWRkZW4iIG5hbWU9ImN1cnJlbmN5X2NvZGUiIHZhbHVlPSJVU0QiIC8+XG4gICAgPGEgc3R5bGU9InRleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOmluaGVyaXQiIG9uY2xpY2s9ImphdmFzY3JpcHQ6JChcJyNwYWxldG9vbHMtZG9uYXRlXCcpWzBdLnN1Ym1pdCgpIiBocmVmPSJqYXZhc2NyaXB0OnZvaWQoMCkiPlBhbGV0b29scyBEb25hdGU8L2E+PC9mb3JtPjwvYT4nKSx5KCJodHRwczovL3d3dy5pZXNhLWdsb2JhbC5jb20iLCJpZXNhIiwnPGltZyBzcmM9ImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELzRRQm1SWGhwWmdBQVRVMEFLZ0FBQUFnQUJBRWFBQVVBQUFBQkFBQUFQZ0ViQUFVQUFBQUJBQUFBUmdFb0FBTUFBQUFCQUFJQUFBRXhBQUlBQUFBUUFBQUFUZ0FBQUFBQUFBQmdBQUFBQVFBQUFHQUFBQUFCY0dGcGJuUXVibVYwSURRdU1pNHhBUC9iQUVNQUVBc01EZ3dLRUE0TkRoSVJFQk1ZS0JvWUZoWVlNU01sSFNnNk16MDhPVE00TjBCSVhFNUFSRmRGTnpoUWJWRlhYMkpuYUdjK1RYRjVjR1I0WEdWblkvL2JBRU1CRVJJU0dCVVlMeG9hTDJOQ09FSmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWS8vQUFCRUlBRUlBUUFNQklnQUNFUUVERVFIL3hBQWZBQUFCQlFFQkFRRUJBUUFBQUFBQUFBQUFBUUlEQkFVR0J3Z0pDZ3YveEFDMUVBQUNBUU1EQWdRREJRVUVCQUFBQVgwQkFnTUFCQkVGRWlFeFFRWVRVV0VISW5FVU1vR1JvUWdqUXJIQkZWTFI4Q1F6WW5LQ0NRb1dGeGdaR2lVbUp5Z3BLalExTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9PRWhZYUhpSW1La3BPVWxaYVhtSm1hb3FPa3BhYW5xS21xc3JPMHRiYTN1TG02d3NQRXhjYkh5TW5LMHRQVTFkYlgyTm5hNGVMajVPWG01K2pwNnZIeTgvVDE5dmY0K2ZyL3hBQWZBUUFEQVFFQkFRRUJBUUVCQUFBQUFBQUFBUUlEQkFVR0J3Z0pDZ3YveEFDMUVRQUNBUUlFQkFNRUJ3VUVCQUFCQW5jQUFRSURFUVFGSVRFR0VrRlJCMkZ4RXlJeWdRZ1VRcEdoc2NFSkl6TlM4QlZpY3RFS0ZpUTA0U1h4RnhnWkdpWW5LQ2txTlRZM09EazZRMFJGUmtkSVNVcFRWRlZXVjFoWldtTmtaV1puYUdscWMzUjFkbmQ0ZVhxQ2c0U0Zob2VJaVlxU2s1U1ZscGVZbVpxaW82U2xwcWVvcWFxeXM3UzF0cmU0dWJyQ3c4VEZ4c2ZJeWNyUzA5VFYxdGZZMmRyaTQrVGw1dWZvNmVyeTgvVDE5dmY0K2ZyLzJnQU1Bd0VBQWhFREVRQS9BT2JxZTJzcnE3LzQ5N2VXWDNSU2EydEF0clZOT2ErbHMvdGR3YmdRUXhzY0xrZ0htdW9qMDNVN2xBTHUvd0Rzc2Y4QXp4czFDNEhwdVBOVmNSeUVlbUpwVVAycldZVzNFNGh0dDJESWZVa2RBS3NXbmkrNHRVMkxZMmdUUEFSU3VQYXR3NlBiYWpyVndsNjBza1ZuRkdpS3o5UVFTU1Q2MXhLcGJKcUlTUjJlMVdYQmRlcFhQWDhxQU5LSFVJdFd1QmI2bGJ4N3BtMnBQRW9Wa0o2WjlSOWFyWHVoYWpaU3VyMnNySXBPSkVVbFNQV3R2eFZGcEZ2YXdQcHdoVzUzcmd4TnlGQTZrRDhPYTFkS1crMWZTcmE5WFVKWUxnQXFjS0NqNEo1Syt0SUR6N3BSWGQzTm1idTVGanJGbkNacFVab2J1MytVc1FPNHJoS1lqc3ZEbHBjZjJUWmt3UGo3ZUplVi9nMi9lK2xiK3EzMTFhejJ5VzhEeUl6WmxZSVcycmtEdDM1eitGWUY5ZDNNT3I2SkRGUElrVHd4YmtWaUFlZTRyUHNZOWMxV2U1K3lYOG9FVDRJYVpoMUp4ajhxUXpXRjNxTWl0TE5wNnRJU1ZML1pTV1pjY0xqUFE4L2w3MVhsKzFLcm1QU1lIWU80Qy9ZaVBsQTRPZjZWTFphUDRqaXZZSko3NHRFcmd1dm5zY2pQUEZWV2oxblZkYzFDS3p2M2lTQ1FqbVVxQU1rQUFENlVBWFRiVEpLd2V5dFdWWlZUSzJQVUVaSi9EcFQ3UFV0VnQ3ZU5UcC9scUhYS1J3RUFKakxZOThuK2RWdjdBOFNmOUJiL0FNanYvaFFkQThTWS93Q1Fybi90dS84QWhRQnU2aVIvYkdsbi9yci9BT2dWNWdlcHJyOUoxbTd0dFJiUzlhYkxjb2tyakpSaU1EbnVEbnJYTTZqWXphYmV5V3M0K1pEd2V6RHNSVFFIUmFuL0FNaDNRZjhBcmpEL0FPaFZuYWJZUlh0eGQrWnFhMlJXVGdNY2J1VDdpdFNMVU5FdnB0T3VMbWU0aXViZEVRS0I4dVFlNXgwelQ5UjByUUJMUFBjU1hWdGlZbzZMeUEzWDBQQkhJcEFNdHRHdG9MbUtZK0lZbUViaHR1NGM0UFQ3MUxlYUxaM045Y1hLYTdCSDV6bDlvSTR5Zjk2b1A3TDhNL1pmdFAyNjc4cmY1ZTdIOFdNNCs3NlVUYVg0WmdTSjVMNjdDekp2VGpxTWtmM2ZhZ0NockZpbW5SUnZCcXkzVE8yQ3FOMEhyMU5YN0c0OHZ4Vll0Tk5zakZ1aFlzMkIvcXFuaTBidzR1cUxabTV1Wkp3MkRFM1FucmpJSDlhUzZ0OUIxclV0OGVvU283cUFFV0lnQUtQY2NEQW9BdGVMYld5MUcxKzFXOXpBYm1FZEJJTXV2cDlheklXSGlUU1BzN2tmMmxacm1Oai9BTXRVOVByL0FKOWFMalJkQ3RVaGFiVTUxRXliMC9kOGxmWHBSQmQ2Tm9pVFQ2ZmNUWFYyNkZFM0x0Q1o3OUtBT2FydXZzZHJxV2tXOXhMZXhvazBBaWxaK011djNUOVFjajNGY0xXeG9lc3hhZWtrRjNiL0FHbTNZN2xUKzYyTVpINEdtQnIvQVBDUHdmMk9iWCsxYmJpZnpTL2I3dU1kYUwzUUlMbExTSCsxclpYdDQvS0lQVW5jZmYzeFdoWlgrbWFoYUVXRmxFODM4VnM3Qkd4ejA3SHFmenAvMnZTMElGenBjOE13UDNHZ0xaUHNSd2VsSUN1TkhoWHhDZFNPcFcrTjVieSsvd0IwKy9zZnlxdnBuaHkzamQ0MTFLQ1dTWDVTRTY3UDRnT2VwNlo5TTFvaDdJbHJpNjB4YlcySFBtM0RCV0o5bDVPYXhyL3hMWUxGTW1tMlJqbUlLcE4wd0R3VCtWQUdSNGtuUzQxdTRNVDdva0lST01BQURHQjdWbVVVVXhCUlJSUUFBbFNDQ1FSMElydC9EMTFjU2FUTTBrOHJzcThGbkpJb29vWTBjamZ6elQzVEdhVjVDRGdGMkp4K2RWcUtLQkJSUlJRQi85az0iIGFsdD0iIiAvPicpfSgpOw==";